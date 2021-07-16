import { Configuration, Trickle} from "./peerconfig";
import { Conn } from "./network/conn"
import { pb } from "./proto/pb/proto";
import { Command } from "./proto/command";
import { RequestBytes } from "./proto/request";
import { RemoteStream, makeRemote } from "./stream";

export class Subscriber {
    pc:RTCPeerConnection;
    datachannel?:RTCDataChannel;
    candidates:RTCIceCandidateInit[];
    ws:Conn;
    ontrack?: (track: MediaStreamTrack, stream: RemoteStream) => void;
    ondatachannel?: (ev: RTCDataChannelEvent) => void;

    constructor(config:Configuration, ws:Conn) {
        this.ws = ws;
        this.pc = new RTCPeerConnection(config);
        this.candidates = [];

        this.pc.onicecandidate = ({ candidate }) => {
            if(candidate) {
                this.trickle({target:1, candidate:candidate});
            }
        }

        this.pc.onconnectionstatechange = async (e) => {
            console.log("SUB onconnectionstatechange:", this.pc.iceConnectionState);
            if(this.pc.iceConnectionState == "disconnected") {
                if(this.pc.restartIce){
                    this.pc.restartIce();
                }
            }
        }

        this.pc.ontrack = (ev: RTCTrackEvent) => {
            const stream = ev.streams[0];
            const remote = makeRemote(stream, this);
            if(this.ontrack) this.ontrack(ev.track, remote);
        }

        // this.pc.ondatachannel = (evt:RTCDataChannelEvent) => {
        //     if(this.ondatachannel) this.ondatachannel(evt);
        // }
    }
    
    trickle(candidate:Trickle) {
        if (candidate.target != pb.SFU.Target.SUBSCRIBER.valueOf()) {
            return;
        }

        let frame = new pb.SFU.Signal.Request();
        frame.Payload = "trickle";
        frame.trickle = new pb.SFU.Trickle({Target:pb.SFU.Target.PUBLISHER, Candidate:JSON.stringify(candidate.candidate)});
        let req = new RequestBytes();
        req.command = Command.SFU.Command;
        req.subCommand = Command.SFU.SubCommand.NegotiateCommand;
        req.content = pb.SFU.Signal.Request.encode(frame).finish();
        console.log("SUB trickle-----", candidate);
        this.ws.send(req);
    }

    async negotiate(description: RTCSessionDescriptionInit) {
        let answer: RTCSessionDescriptionInit | undefined;
        console.log("negotiate:", description, this.candidates);
        try {
            await this.pc.setRemoteDescription(description);
            console.log("----------------------", this.pc.remoteDescription);
            if(this.pc.remoteDescription) {
                this.candidates.forEach((c) => this.pc.addIceCandidate(c));
                this.candidates = [];
            }
    

            answer = await this.pc.createAnswer();
            this.pc.setLocalDescription(answer);
            this.answer(answer);
        }catch(e) {
            console.error(e);
        }
    }

    answer(answer:RTCSessionDescriptionInit) {
        let frame = new pb.SFU.Signal.Request();
        frame.Payload = "Description";
        frame.Description = Uint8Array.from(JSON.stringify(answer), (c) => c.charCodeAt(0));

        let req = new RequestBytes();
        req.command = Command.SFU.Command;
        req.subCommand = Command.SFU.SubCommand.NegotiateCommand;
        req.content = pb.SFU.Signal.Request.encode(frame).finish();
        console.log("SUB answer-----", answer);
        this.ws.send(req);
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