import {WriteBuffer} from "../bytes/writebuffer";
import { Request } from "../network/request"
class RequestBytes implements Request{
    ver:number;
    command:number;
    subCommand:number;
    seqNo:number;
    content:ArrayBuffer;
    
    constructor() {
        this.ver = 1;
        this.command = 0;
        this.subCommand = 0;
        this.seqNo = 0;
        this.content = new ArrayBuffer(0);
    }

    setSeqNo(i:number):void {
        this.seqNo = i;
    }

    marshal():ArrayBuffer{
        if (this.content == undefined) {
            this.content = new ArrayBuffer(0);
        }

        let bytesLen:number = 9 + this.content.byteLength;
        let buffer:WriteBuffer = new WriteBuffer(new ArrayBuffer(bytesLen));
        buffer.writeInt8(this.ver);
        buffer.writeUint32(this.seqNo);
        buffer.writeInt16(this.command);
        buffer.writeInt16(this.subCommand);
        buffer.writeBytes(this.content);
        return buffer.bytes();
    }

    public isValid():boolean {
        if (this.seqNo < 1) {
            return false;
        }

        if (this.command < 1 || this.subCommand < 1) {
            return false;
        }

        if(this.content == undefined || this.content.byteLength < 1) {
            return false;
        }

        return true;
    }

}


export { Request, RequestBytes }