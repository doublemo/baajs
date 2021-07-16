interface Request {
    setSeqNo(i:number):void;
    marshal():ArrayBuffer;
}

export { Request }