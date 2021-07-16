import { Configuration, API_CHANNEL} from "./peerconfig";
import { Conn } from "./network/conn"
import { Publisher } from "./publisher";
import { Subscriber } from "./subscriber";
import { Response } from "./network/response";
import { ResponseBytes } from "./proto/response";
import { Command } from "./proto/command";
import { pb } from "./proto/pb/proto";
import { ReadBuffer } from "./bytes/readbuffer";
import { LocalStream, RemoteStream } from "./stream";


export default class Peer {
    protected conn?:Conn | undefined;
    protected pub:Publisher;
    protected sub:Subscriber;
    ondatachannel?:(ev: RTCDataChannelEvent) => void;
    ontrack?: (track: MediaStreamTrack, stream: RemoteStream) => void;

    constructor(ws:Conn, config: Configuration =  {
        codec: 'vp8',
        iceServers: [
          {
            urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'],
          },
        ],
    }) {
        this.pub = new Publisher(config, ws);
        this.sub = new Subscriber(config, ws);
        this.sub.ontrack = (track:MediaStreamTrack, stream:RemoteStream) => {
            if(this.ontrack) this.ontrack(track, stream);
        }
    }

   async join(){
        const ready = new Promise<void>((resolve) => {
            this.sub.pc.ondatachannel = (ev:RTCDataChannelEvent) => {
                console.log("ondatachannelvv:", ev.channel);
                if (ev.channel.label === API_CHANNEL) {
                    this.pub.datachannel = ev.channel;
                    this.sub.datachannel = ev.channel;
                    ev.channel.onmessage = (e) => {
                        console.log("ondatachannel:", e.data);
                    }
                    resolve();
                    return;
                }

                if(this.ondatachannel) this.ondatachannel(ev);
            }
        });

        await this.pub.joinOffer();
        return ready;
    }

    onMessage():(evt:Response | undefined, payload:ArrayBuffer | undefined) => void {
        return (evt:Response | undefined, payload:ArrayBuffer | undefined) =>  {
            if(!evt){
                return;
            }
    
            if(evt instanceof ResponseBytes) {
                if(evt.command == Command.SFU.Command && evt.subCommand == Command.SFU.SubCommand.NegotiateCommand) {
                    this.handlemegotiateOnMessage(evt);
                }
            }
        }
    }


    handlemegotiateOnMessage(evt:ResponseBytes):void {
        if(evt.code > 0){
            let buffer =  new ReadBuffer(new Uint8Array(evt.content).buffer);
            console.error(evt.code + " - " + buffer.readString())
            return;
        }

        let frame = pb.SFU.Signal.Reply.decode(new Uint8Array(evt.content));
        console.log('frame.Payload:', frame.Payload);
        switch(frame.Payload) {
            case "description":
                if(!frame.description) {
                    return;
                }

                let buffer =  new ReadBuffer(new Uint8Array(frame.description).buffer);
                let sdp = JSON.parse(buffer.readString());
                if(sdp.type =="offer") {
                    this.sub.negotiate(sdp);
                } else if(sdp.type == "answer") {
                    //todo
                    console.log("answer---------:", sdp);
                }
                break;
            case "trickle":
                if(!frame.trickle) {
                    return;
                }

                console.log('recv------:', frame.trickle.Target, frame.trickle.Candidate);

                if(frame.trickle.Target == pb.SFU.Target.PUBLISHER) {
                    if(this.pub.pc.remoteDescription) {
                        if(frame.trickle.Candidate) this.pub.pc.addIceCandidate(JSON.parse(frame.trickle.Candidate));
                    } else {
                        if(frame.trickle.Candidate) this.pub.candidates.push(JSON.parse(frame.trickle.Candidate));
                    }
                } else if(frame.trickle.Target == pb.SFU.Target.SUBSCRIBER) {
                    if(this.sub.pc.remoteDescription ) {
                       if(frame.trickle.Candidate) this.sub.pc.addIceCandidate(JSON.parse(frame.trickle.Candidate));
                    } else {
                        if(frame.trickle.Candidate) this.sub.candidates.push(JSON.parse(frame.trickle.Candidate));
                    }
                } else {
                    return;
                }
                break;


            case "iceConnectionState":
                console.log("iceConnectionState:", frame.iceConnectionState);
                break;

            default:
                break;
        }
    }

    publish(stream: LocalStream) {
        stream.publish(this.pub);
    }

    close() {
        this.pub.close();
        this.sub.close();
    }

    createDataChannel(lable:string):RTCDataChannel {
        return this.pub.createDataChannel(lable);
    }
}