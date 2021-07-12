import bigInt = require("big-integer/BigInteger");


export default class DH {
    _rnd:bigInt.BigInteger;
    _base:bigInt.BigInteger;
    _prime:bigInt.BigInteger;
    _maxint64:bigInt.BigInteger;

    constructor() {
        this._base = bigInt(3);
        this._prime = bigInt(0x7FFFFFC3);
        this._maxint64 = bigInt(9223372036854775807);
        this._rnd = bigInt((new Date()).valueOf() * 1000000);
    }

    public genSecret():bigInt.BigInteger {
        return bigInt.randBetween(this._rnd,this._maxint64);
    }

    public genModpower(s:bigInt.BigInteger):bigInt.BigInteger{
        return this._base.modPow(s, this._prime);
    }

    public key(secret:bigInt.BigInteger, modpower:bigInt.BigInteger):bigInt.BigInteger {
        return modpower.modPow(secret, this._prime)
    }
}
