import bigInt = require("big-integer/BigInteger"); 
import Dh from "../crypto/dh";
import Rc4 from "../crypto/rc4";
import { pb } from '../proto/pb/proto';
import { Command } from '../proto/command';
import { Request }  from '../proto/request';
import { Response, ResponseBytes }  from '../proto/response';
import {ReadBuffer}  from '../bytes/readbuffer';

import { Middleware, MessageProcessor, MessageProcess, Mws, MessageProcessorArgs }  from './conn';


class Socket {
    protected ws:WebSocket;
    private seqNo:number;
    private receiveMiddlewares:Array<(next:MessageProcessor) => MessageProcessor>;
    private writeMiddlewares:Array<(next:MessageProcessor) => MessageProcessor>;
    public onConnect?:() => void;
    public onMessage?:(evt:Response | undefined, payload:ArrayBuffer | undefined) => void;
    public onError?:(evt:any) => void;
    public onClose?:() => void;

    constructor(url:string) {
        this.seqNo = 0;
        this.receiveMiddlewares = [];
        this.writeMiddlewares = [];
        this.ws = new WebSocket(url);
        this.ws.binaryType = "arraybuffer";
        this.ws.addEventListener("open", () => {
            // 握手
            if(this.onConnect) this.onConnect();
        });

        this.ws.addEventListener("message", (evt) => {
            let args = new MessageProcessorArgs();
            args.payload = evt.data;
            let m = new MessageProcess();
            m.onProcess = (args:MessageProcessorArgs) => {
                console.log("recv message: len = ", args.payload, args.response);
                if(this.onMessage) {
                    this.onMessage(args.response, args.payload);
                }
            }

            // 调动中间件
            let mws = new Mws(this.receiveMiddlewares);
            let pr = mws.process(m);
            pr.process(args);
        });

        this.ws.addEventListener("error", (e) => {
            if(this.onError) this.onError(e);
        });

        this.ws.addEventListener("close", () => {
            if(this.onClose) this.onClose;
        });

    }

    use(...mids:Middleware[]):void {
        for(var i = 0; i < mids.length; i ++) {
            var r = mids[i].receive()
            if(r) {
                this.receiveMiddlewares.push(r);
            }

            var m = mids[i].write();
            if(m) {
                this.writeMiddlewares.push(m);
            }
        }
    }

    send(req:Request):void {
        let args = new MessageProcessorArgs();
        args.request = req;
        let m = new MessageProcess();
        m.onProcess = (args:MessageProcessorArgs) => {
            if(args.payload) {
                console.log("send message: len = ", args.payload);
                this.ws.send(args.payload);
            } else if(args.request) {
                console.log("send message: len = ", args.request.marshal(), args.request);
                this.ws.send(args.request.marshal());
            }
        }

        // 调动中间件
        let mws = new Mws(this.writeMiddlewares);
        let pr = mws.process(m);
        pr.process(args);
    }

    async handshake() {

    }
}

export { Socket }
// 例子
// let ws = new Socket("ws://localhost:9093/websocket");
// ws.use(new BytesMiddleware());
// ws.onConnect = function(){
//     console.log("ok");
// }

// ws.onMessage = function(resp:Response | undefined, payload:ArrayBuffer | undefined):void {


//     console.log(resp, payload);
//     if(resp instanceof ResponseBytes) {
//         console.log("resp.seqNo:", resp.seqNo);
//     }
// }