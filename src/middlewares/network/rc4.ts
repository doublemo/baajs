import bigInt = require("big-integer/BigInteger"); 
import { MessageProcessorArgs, MessageProcessor, Middleware, MessageProcess } from "../../network/conn";
import { ResponseBytes } from "../../proto/response";
import  Dh  from "../../crypto/dh";
import  Rc4  from "../../crypto/rc4";

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

    handshake(command:number, subCommand:number):void {

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
                    if(args.response == undefined) {
                        
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