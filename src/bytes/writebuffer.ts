class WriteBuffer {
    private pos:number;
    private buffer:ArrayBuffer;
    private view:DataView;
    private littleEndian:boolean;

    constructor(buffer?:ArrayBuffer, littleEndian?:boolean) {
        this.pos = 0;
        this.buffer = buffer == undefined ? new ArrayBuffer(1024) : buffer;
        this.view = new DataView(this.buffer);
        this.littleEndian = littleEndian == undefined ? false : littleEndian;
    }

    protected mybeExpand(byteLength:number) {
        if(this.pos + byteLength < this.buffer.byteLength) {
            return;
        }

        let newBuffer:ArrayBuffer = new ArrayBuffer(this.buffer.byteLength + byteLength);
        let frame:Uint8Array = new Uint8Array(newBuffer);
        frame.set(new Uint8Array(this.buffer, 0));
        this.buffer = newBuffer;
        this.view = new DataView(this.buffer);
    }

    public writeInt8(v:number) {
        this.mybeExpand(Int8Array.BYTES_PER_ELEMENT);
        this.view.setInt8(this.pos, v);
        this.pos += Int8Array.BYTES_PER_ELEMENT;
    }

    public writeUint8(v:number) {
        this.mybeExpand(Uint8Array.BYTES_PER_ELEMENT);
        this.view.setUint8(this.pos, v);
        this.pos += Uint8Array.BYTES_PER_ELEMENT;
    }

    public writeInt16(v:number) {
        this.mybeExpand(Int16Array.BYTES_PER_ELEMENT);
        this.view.setInt16(this.pos, v, this.littleEndian);
        this.pos += Int16Array.BYTES_PER_ELEMENT;
    }

    public writeUint16(v:number) {
        this.mybeExpand(Uint16Array.BYTES_PER_ELEMENT);
        this.view.setUint16(this.pos, v, this.littleEndian);
        this.pos += Uint16Array.BYTES_PER_ELEMENT;
    }

    public writeInt32(v:number) {
        this.mybeExpand(Int32Array.BYTES_PER_ELEMENT);
        this.view.setInt32(this.pos, v, this.littleEndian);
        this.pos += Int32Array.BYTES_PER_ELEMENT;
    }

    public writeUint32(v:number) {
        this.mybeExpand(Uint32Array.BYTES_PER_ELEMENT);
        this.view.setUint32(this.pos, v, this.littleEndian);
        this.pos += Uint32Array.BYTES_PER_ELEMENT;
    }

    public writeInt64(v:bigint) {
        this.mybeExpand(BigInt64Array.BYTES_PER_ELEMENT);
        this.view.setBigInt64(this.pos, v, this.littleEndian);
        this.pos += BigInt64Array.BYTES_PER_ELEMENT;
    }

    public writeUint64(v:bigint) {
        this.mybeExpand(BigUint64Array.BYTES_PER_ELEMENT);
        this.view.setBigUint64(this.pos, v, this.littleEndian);
        this.pos += BigUint64Array.BYTES_PER_ELEMENT;
    }

    public writeFloat32(v:number) {
        this.mybeExpand(Float32Array.BYTES_PER_ELEMENT);
        this.view.setFloat32(this.pos, v, this.littleEndian);
        this.pos += Float32Array.BYTES_PER_ELEMENT;
    }

    public writeFloat64(v:number) {
        this.mybeExpand(Float64Array.BYTES_PER_ELEMENT);
        this.view.setFloat64(this.pos, v, this.littleEndian);
        this.pos += Float64Array.BYTES_PER_ELEMENT;
    }

    public writeString(str:string) {
        let out = [], p = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c < 128) {
               out[p++] = c;
           } else if (c < 2048) {
               out[p++] = (c >> 6) | 192;
               out[p++] = (c & 63) | 128;
           } else if (
                 ((c & 0xFC00) == 0xD800) && (i + 1) < str.length &&
                 ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
               // Surrogate Pair
               c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
               out[p++] = (c >> 18) | 240;
               out[p++] = ((c >> 12) & 63) | 128;
               out[p++] = ((c >> 6) & 63) | 128;
               out[p++] = (c & 63) | 128;
           } else {
               out[p++] = (c >> 12) | 224;
               out[p++] = ((c >> 6) & 63) | 128;
               out[p++] = (c & 63) | 128;
           }
         }

         this.writeBytes(new Uint8Array(out));
    }

    public writeBytes(v:ArrayBuffer) {
        // this.writeUint16(v.byteLength);
        let newBuffer:ArrayBuffer = new ArrayBuffer(this.buffer.byteLength + v.byteLength);
        let frame:Uint8Array = new Uint8Array(newBuffer);
        
        frame.set(new Uint8Array(this.buffer), 0);
        frame.set(new Uint8Array(v), this.pos);
        this.pos += v.byteLength;
        this.buffer = newBuffer;
        this.view = new DataView(this.buffer);
    }

    public bytes():ArrayBuffer {
        return this.buffer.slice(0, this.pos);
    }
}

export { WriteBuffer };
