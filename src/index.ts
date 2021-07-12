import { Socket } from "./network/socket";
import { Request } from "./network/request";
import { Response } from "./network/response";
import { BytesMiddleware } from "./middlewares/network/bytes";
import { ResponseBytes } from "./proto/response";

let ws = new Socket("ws://localhost:9093/websocket");
ws.use(new BytesMiddleware());
ws.onConnect = function(){
    console.log("ok");
}

ws.onMessage = function(resp:Response | undefined, payload:ArrayBuffer | undefined):void {


    console.log(resp, payload);
    if(resp instanceof ResponseBytes) {
        console.log("resp.seqNo:", resp.seqNo);
    }
}