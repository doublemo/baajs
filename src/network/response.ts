interface Response {
    getSeqNo():number;
    unmarshal(content:ArrayBuffer):boolean;
}

export{ Response }