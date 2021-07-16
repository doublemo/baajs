import bigInt = require("big-integer/BigInteger"); 
import { MessageProcessorArgs, MessageProcessor, Middleware, MessageProcess } from "../../network/conn";
import { ResponseBytes } from "../../proto/response";
import  Dh  from "../../crypto/dh";
import  Rc4  from "../../crypto/rc4";
import { pb } from "../../proto/pb/proto";
import { Command } from "../../proto/command";

class Rc4Middleware implements Middleware  {
    readonly _e1:bigInt.BigInteger;
    readonly _e2:bigInt.BigInteger;
    readonly _x1:bigInt.BigInteger;
    readonly _x2:bigInt.BigInteger;
    readonly _dh:Dh;
    encoder?:Rc4 | undefined;
    decoder?:Rc4 | undefined;

    constructor() {
        this._dh = new Dh();
        this._x1 = this._dh.genSecret();
        this._x2 = this._dh.genSecret();
        this._e1 = this._dh.genModpower(this._x1);
        this._e2 = this._dh.genModpower(this._x2);
    }

    handshake():ArrayBuffer {
        let frame = new pb.Agent.Handshake({E1:this._e1.toJSNumber(), E2:this._e2.toJSNumber()});
        return pb.Agent.Handshake.encode(frame).finish();
    }

    receive():((next:MessageProcessor) => MessageProcessor) | undefined {
        var parent = this;
        return function(next:MessageProcessor):MessageProcessor{
            let decoder = parent.decoder;
            let m = new MessageProcess();
            m.onProcess = function(args:MessageProcessorArgs) {
                if(args.payload && decoder) {
                    args.payload = decoder.update(new Uint8Array(args.payload)).buffer;
                } else if(decoder == undefined) {
                    // mybe decode respose
                    var resp = args.response;
                    if(resp == undefined && args.payload) {
                        resp = new ResponseBytes();
                        resp.unmarshal(args.payload);
                    }

                    if(resp instanceof ResponseBytes ) {
                        if(resp.command == Command.Agent.Command && resp.subCommand == Command.Agent.SubCommand.HandshakeCommand) {
                            let frame = pb.Agent.Handshake.decode(new Uint8Array(resp.content));
                            let k1 = "DH" + parent._dh.key(parent._x1, bigInt(frame.E1.toString())).toString();
                            let k2 = "DH" + parent._dh.key(parent._x2, bigInt(frame.E2.toString())).toString();

                            parent.encoder = new Rc4(k1);
                            parent.decoder = new Rc4(k2);
                            return
                        }
                    }
                }

                next.process(args);
            } 
            return m
        }
    }

    write():((next:MessageProcessor) => MessageProcessor) | undefined {
        var parent = this;
        return function(next:MessageProcessor):MessageProcessor{
            let encoder = parent.encoder;
            let m = new MessageProcess();
            m.onProcess = function(args:MessageProcessorArgs) {
                if(args.payload && encoder) {
                    args.payload = encoder.update(new Uint8Array(args.payload)).buffer;
                }
                next.process(args);
            } 
            return m
        }
    }
}

export { Rc4Middleware }