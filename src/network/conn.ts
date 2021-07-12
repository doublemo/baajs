import { Request } from "./request";
import { Response } from "./response";

interface Conn {
    send(evt:Request):void;
}

interface MessageProcessor {
    process(args:MessageProcessorArgs):void;
}


interface Middleware {
    receive():((next:MessageProcessor) => MessageProcessor) | undefined;
    write():((next:MessageProcessor) => MessageProcessor) | undefined;
}


class MessageProcessorArgs {
    response?:Response | undefined;
    request?:Request | undefined;
    payload?:ArrayBuffer | undefined;
}

class Mws {
    mws:Array<(next:MessageProcessor) => MessageProcessor>;
    constructor(mws:Array<(next:MessageProcessor) => MessageProcessor>){
        this.mws = mws;
    }

    process(last:MessageProcessor):MessageProcessor {
        if(this.mws.length == 0) {
            return last;
        }

        let h = this.mws[this.mws.length - 1](last);
        for(var i = this.mws.length - 2; i >= 0; i--){
            h = this.mws[i](h)
        }
        return h
    }
}

class MessageProcess implements MessageProcessor {
    onProcess?:((args:MessageProcessorArgs) => void) | undefined;
    process(args:MessageProcessorArgs):void {
        if(this.onProcess) this.onProcess(args);
    }
}

export { Conn, Middleware, MessageProcessor, MessageProcessorArgs, MessageProcess, Mws}
// test code
// let f1:(next:MessageProcessor) => MessageProcessor = function(next:MessageProcessor):MessageProcessor {
//     let m = new MessageProcess();
//     m.onProcess = function(args:MessageProcessorArgs) {
//         console.log(1);
//         next.process(args);
//     } 
//     return m;
// }

// let f2:(next:MessageProcessor) => MessageProcessor = function(next:MessageProcessor):MessageProcessor {
//   let m = new MessageProcess();
//   m.onProcess = function(args:MessageProcessorArgs) {
//       console.log(2);
//       next.process(args);
//   } 
//   return m;
// }

// let f3:(next:MessageProcessor) => MessageProcessor = function(next:MessageProcessor):MessageProcessor {
//   let m = new MessageProcess();
//   m.onProcess = function(args:MessageProcessorArgs) {
//       console.log(3);
//       next.process(args);
//   } 
//   return m;
// }

// let x:Array<(next:MessageProcessor) => MessageProcessor> = [f1, f2, f3];
// x.push()
// let mws = new Mws(x);

// let m1 = new MessageProcess();
// m1.onProcess = function(args:MessageProcessorArgs) {

//   console.log(4);
// } 
// let h = mws.process(m1);
// h.process(new MessageProcessorArgs());