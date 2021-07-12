export default class Rc4 {
    _s:Array<number>;
    _i:number;
    _j:number;
    _k:string;

    constructor(key:string) {
        let i:number = 0;
        let j:number = 0;
        let x:number = 0;
        let s:Array<number> = new Array();
        for(i= 0; i < 256; i++) {
            s[i] = i;
        }

        for(i= 0; i < 256; i++) {
            j = (j+s[i]+key.charCodeAt(i % key.length)) % 256;
            x = s[i];
            s[i] = s[j];
            s[j] = x;
        }
        
        this._s = s;
        this._i = 0;
        this._j = 0;
        this._k = key;
    }

    public update(bytes:Uint8Array):Uint8Array {
        let i:number = this._i
        let j:number = this._j;
        let s:Array<number> = this._s;
        let y:number = 0;
        let x:number = 0;
        let p:number = 0;
        let n:Uint8Array = new Uint8Array(bytes.length);
        for (p = 0; p < bytes.length; p++) {
            i = (i + 1) % 256;
            x = s[i];
            j = (j + x) % 256;
            y = s[j];
            s[i] = y;
            s[j] = x;
            n[p] = bytes[p] ^ s[(x+y) % 256];
        }

        this._i = i;
        this._j = j;
        return n;
    }
}
