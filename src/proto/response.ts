import { ReadBuffer } from "../bytes/readbuffer";
import { Response } from "../network/response"

class ResponseBytes implements Response {
    code:number;
    ver:number;
    command:number;
    subCommand:number;
    seqNo:number;
    content:ArrayBuffer;
    constructor() {
        this.code = 0;
        this.ver = 1;
        this.command = 0;
        this.subCommand = 0;
        this.seqNo = 0;
        this.content = new ArrayBuffer(0);
    }

    unmarshal(data:ArrayBuffer):boolean {
        let buffer:ReadBuffer = new ReadBuffer(data);
        this.code = buffer.readInt16();
        this.ver = buffer.readInt8();
        this.seqNo = buffer.readUint32();
        this.command = buffer.readInt16();
        this.subCommand = buffer.readInt16();
        this.content = buffer.bytes();
        return true;
    }
}

export { Response, ResponseBytes }