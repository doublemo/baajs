import { Socket } from "./network/socket";
import { Request } from "./network/request";
import { Response } from "./network/response";
import { BytesMiddleware } from "./middlewares/network/bytes";
import { Rc4Middleware } from "./middlewares/network/rc4";
import { ResponseBytes } from "./proto/response";
import { Command } from "./proto/command";
import { RequestBytes } from "./proto/request";
import Peer from "./peer";
import { LocalStream } from "./stream";
export default function test() {
    alert("test");
}
export  {Socket, BytesMiddleware, Rc4Middleware, Peer, LocalStream, ResponseBytes, Command, RequestBytes, Request, Response} ;



// let ws = new Socket("ws://localhost:9093/websocket");
// let peer = new Peer(ws);
// ws.use(new BytesMiddleware());
// ws.onConnect = function(){
//     console.log("ok");
//     let rc4Mid = new Rc4Middleware();
//     let rc4Handshake = rc4Mid.handshake();
//     let req = new RequestBytes();
//     req.command = Command.Agent.Command;
//     req.subCommand = Command.Agent.SubCommand.HandshakeCommand;
//     req.ver = 1;
//     req.content = rc4Handshake;
//     ws.use(rc4Mid);
//     ws.send(req);

//     peer.join();
//     LocalStream.getUserMedia({
//         resolution: "hd",
//         simulcast: false,
//         audio: true,
//         video:true,
//         codec: 'vp8'
//     }).then((media) => {
//         peer.publish(media);
//     }).catch(console.error);
    
// }

// ws.onMessage = peer.onMessage();

