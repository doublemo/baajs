import { Configuration, Trickle, API_CHANNEL} from "./peerconfig";
import { Conn } from "./network/conn"
import { pb } from "./proto/pb/proto";
import { Command } from "./proto/command";
import { RequestBytes } from "./proto/request";
import { Response } from "./network/response"
import { ResponseBytes } from "./proto/response";
import { ReadBuffer } from "./bytes/readbuffer";

export class Publisher {
    pc:RTCPeerConnection;
    datachannel?:RTCDataChannel;
    candidates:RTCIceCandidateInit[];
    ws:Conn;

    constructor(config:Configuration, ws:Conn) {
        this.ws = ws;
        this.pc = new RTCPeerConnection(config);
        this.candidates = [];

        this.pc.createDataChannel(API_CHANNEL);

        this.pc.onicecandidate = ({ candidate }) => {
            if(candidate) {
                this.trickle({target:0, candidate:candidate});
            }
        }

        this.pc.onconnectionstatechange = async (e) => {
            console.log("PUB onconnectionstatechange:", this.pc.iceConnectionState);
            if(this.pc.iceConnectionState == "disconnected") {
                if(this.pc.restartIce){
                    console.log("PUB restartIce");
                    this.pc.restartIce();
                }
            }
        }
    }

    async joinOffer() {
        const offer = await this.pc.createOffer();
        await this.pc.setLocalDescription(offer);
        const answer = await this.awaitJoinOffer("test", offer);
        await this.pc.setRemoteDescription(answer);
        this.candidates.forEach((c) => this.pc.addIceCandidate(c));
        this.pc.onnegotiationneeded = this.onNegotiationNeeded.bind(this);
    }

    async awaitJoinOffer(sessionId:string, offer: RTCSessionDescriptionInit) {
        let frame = new pb.SFU.Subscribe.Request();
        frame.SessionId = sessionId
        frame.Description = Uint8Array.from(JSON.stringify(offer), (c) => c.charCodeAt(0));

        let req = new RequestBytes();
        req.command = Command.SFU.Command;
        req.subCommand = Command.SFU.SubCommand.JoinCommand;
        req.content = pb.SFU.Subscribe.Request.encode(frame).finish();
      
        return new Promise<RTCSessionDescriptionInit>((resolve, reject) => {
            console.log("PUB awaitJoinOffer-----", offer);
            const seqNo = this.ws.send(req); 
            const evtname = this.ws.eventNameBySeqNo(seqNo);
            const handler = (resp:Response) => {
              if (resp instanceof ResponseBytes) {
                  if(resp.code == 0) {
                    let frame = pb.SFU.Subscribe.Reply.decode(new Uint8Array(resp.content));
                    if(frame.Description && frame.Ok) {
                        let buffer =  new ReadBuffer(new Uint8Array(frame.Description).buffer);
                        let sdp = JSON.parse(buffer.readString());
                        if(sdp.type == "answer") {
                            resolve(sdp);
                        }
                    }
                  }
              }
              this.ws.events().removeListener(evtname, handler); 
            };

            this.ws.events().addListener(evtname, handler);
        });
    }

     async awaitSignalOffer(offer: RTCSessionDescriptionInit) {
        let frame = new pb.SFU.Signal.Request();
        frame.Payload = "Description";
        frame.Description = Uint8Array.from(JSON.stringify(offer), (c) => c.charCodeAt(0));

        let req = new RequestBytes();
        req.command = Command.SFU.Command;
        req.subCommand = Command.SFU.SubCommand.NegotiateCommand;
        req.content = pb.SFU.Signal.Request.encode(frame).finish();
      
        return new Promise<RTCSessionDescriptionInit>((resolve, reject) => {
            console.log("PUB awaitSignalOffer-----", offer);
            const seqNo = this.ws.send(req); 
            const evtname = this.ws.eventNameBySeqNo(seqNo);
            const handler = (resp:Response) => {
              if (resp instanceof ResponseBytes) {
                  if(resp.code == 0) {
                    let frame = pb.SFU.Signal.Reply.decode(new Uint8Array(resp.content));
                    if(frame.Payload == "description" && frame.description) {
                        let buffer =  new ReadBuffer(new Uint8Array(frame.description).buffer);
                        let sdp = JSON.parse(buffer.readString());
                        if(sdp.type == "answer") {
                            resolve(sdp);
                        }
                    }
                  }
              }
              this.ws.events().removeListener(evtname, handler); 
            };

            this.ws.events().addListener(evtname, handler);
        });
    }
    
    trickle(candidate:Trickle) {
        if (candidate.target != pb.SFU.Target.PUBLISHER.valueOf()) {
            return;
        }

        let frame = new pb.SFU.Signal.Request();
        frame.Payload = "trickle";
        frame.trickle = new pb.SFU.Trickle({Target:pb.SFU.Target.PUBLISHER, Candidate:JSON.stringify(candidate)});
        let req = new RequestBytes();
        req.command = Command.SFU.Command;
        req.subCommand = Command.SFU.SubCommand.NegotiateCommand;
        req.content = pb.SFU.Signal.Request.encode(frame).finish();
        console.log("PUB trickle-----", candidate);
        this.ws.send(req);
    }

    private async onNegotiationNeeded(){
        let offer: RTCSessionDescriptionInit | undefined;
        let answer: RTCSessionDescriptionInit | undefined;

        try {
            offer = await this.pc.createOffer();
            await this.pc.setLocalDescription(offer);
            answer = await this.awaitSignalOffer(offer);
            await this.pc.setRemoteDescription(answer);
        }catch(err) {
            console.error(err);
        }
    }

    close() {
        this.pc.close();
    }

    stats(selector:MediaStreamTrack) {
        return this.pc.getStats(selector);
    }

    createDataChannel(lable:string):RTCDataChannel {
        return this.pc.createDataChannel(lable);
    }
}