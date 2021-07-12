import { MessageProcessorArgs, MessageProcessor, Middleware, MessageProcess } from "../../network/conn";
import { ResponseBytes } from "../../proto/response"

class BytesMiddleware implements Middleware  {
    receive():((next:MessageProcessor) => MessageProcessor) | undefined {
        return function(next:MessageProcessor):MessageProcessor{
            let m = new MessageProcess();
            m.onProcess = function(args:MessageProcessorArgs) {
                args.response  = new ResponseBytes();
                if(args.payload) {
                    args.response.unmarshal(args.payload);
                }
                next.process(args);
            } 
            return m
        }
    }

    write():((next:MessageProcessor) => MessageProcessor) | undefined {
       return undefined;
    }
}

export { BytesMiddleware }