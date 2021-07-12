class ReadBuffer {
    private pos:number;
    private buffer:ArrayBuffer;
    private view:DataView;
    private littleEndian:boolean;

    constructor(buffer:ArrayBuffer, littleEndian?:boolean) {
        this.pos = 0;
        this.buffer = buffer;
        this.view = new DataView(buffer);
        this.littleEndian = littleEndian == undefined ? false : littleEndian;
    }

    public readInt8():number {
        let n:number = this.view.getInt8(this.pos);
        this.pos += Int8Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readUint8():number {
        let n:number = this.view.getUint8(this.pos);
        this.pos += Uint8Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readInt16():number {
        let n:number = this.view.getInt16(this.pos, this.littleEndian);
        this.pos += Int16Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readUint16():number {
        let n:number = this.view.getUint16(this.pos, this.littleEndian);
        this.pos += Uint16Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readInt32():number {
        let n:number = this.view.getInt32(this.pos, this.littleEndian);
        this.pos += Int32Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readUint32():number {
        let n:number = this.view.getUint32(this.pos, this.littleEndian);
        this.pos += Uint32Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readInt64():bigint {
        let n:bigint = this.view.getBigInt64(this.pos, this.littleEndian);
        this.pos += BigInt64Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readUint64():bigint {
        let n:bigint = this.view.getBigUint64(this.pos, this.littleEndian);
        this.pos += BigUint64Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readFloat32():number {
        let n:number = this.view.getFloat32(this.pos, this.littleEndian);
        this.pos += Float32Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readFloat64():number {
        let n:number = this.view.getFloat64(this.pos, this.littleEndian);
        this.pos += Float64Array.BYTES_PER_ELEMENT;
        return n;
    }

    public readString():string {
        // let size:number = this.readUint16();
        // if(size > this.buffer.byteLength) {
        //     return "";
        // }

        let bytes:Uint8Array = new Uint8Array(this.bytes());
        let out = [];
        let pos = 0;
        let c   = 0;
        while(pos < bytes.byteLength) {
            let c1:number = bytes[pos++];
            if(c1 < 128) {
                out[c++] = String.fromCharCode(c1);
            } else if (c1 > 191 && c1 < 224) {
                let c2:number = bytes[pos++];
                out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
            } else if (c1 > 239 && c1 < 365) {
                 // Surrogate Pair
                let c2:number = bytes[pos++];
                let c3:number = bytes[pos++];
                let c4:number = bytes[pos++];
                let u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) -
                    0x10000;
                out[c++] = String.fromCharCode(0xD800 + (u >> 10));
                out[c++] = String.fromCharCode(0xDC00 + (u & 1023));
            } else {
                let c2:number = bytes[pos++];
                let c3:number = bytes[pos++];
                out[c++] =
                    String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
            }
        }

        return out.join('');
    }

    public readBytes(size:number):ArrayBuffer {
        if(this.pos + size > this.buffer.byteLength) {
            return new ArrayBuffer(0);
        }

        let n:ArrayBuffer = this.buffer.slice(this.pos, this.pos + size);
        this.pos += size;
        return n;
    }

    public bytes():ArrayBuffer {
        return this.buffer.slice(this.pos, this.buffer.byteLength);
    }
}

export { ReadBuffer };