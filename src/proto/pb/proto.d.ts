import * as $protobuf from "protobufjs";
/** Namespace pb. */
export namespace pb {

    /** Properties of an Agent. */
    interface IAgent {
    }

    /** Represents an Agent. */
    class Agent implements IAgent {

        /**
         * Constructs a new Agent.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAgent);

        /**
         * Creates a new Agent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Agent instance
         */
        public static create(properties?: pb.IAgent): pb.Agent;

        /**
         * Encodes the specified Agent message. Does not implicitly {@link pb.Agent.verify|verify} messages.
         * @param message Agent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Agent message, length delimited. Does not implicitly {@link pb.Agent.verify|verify} messages.
         * @param message Agent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Agent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Agent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Agent;

        /**
         * Decodes an Agent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Agent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Agent;

        /**
         * Verifies an Agent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Agent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Agent
         */
        public static fromObject(object: { [k: string]: any }): pb.Agent;

        /**
         * Creates a plain object from an Agent message. Also converts values to other types if specified.
         * @param message Agent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Agent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Agent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Agent {

        /** Properties of a Handshake. */
        interface IHandshake {

            /** Handshake E1 */
            E1?: (number|Long|null);

            /** Handshake E2 */
            E2?: (number|Long|null);
        }

        /** Represents a Handshake. */
        class Handshake implements IHandshake {

            /**
             * Constructs a new Handshake.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.Agent.IHandshake);

            /** Handshake E1. */
            public E1: (number|Long);

            /** Handshake E2. */
            public E2: (number|Long);

            /**
             * Creates a new Handshake instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Handshake instance
             */
            public static create(properties?: pb.Agent.IHandshake): pb.Agent.Handshake;

            /**
             * Encodes the specified Handshake message. Does not implicitly {@link pb.Agent.Handshake.verify|verify} messages.
             * @param message Handshake message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.Agent.IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Handshake message, length delimited. Does not implicitly {@link pb.Agent.Handshake.verify|verify} messages.
             * @param message Handshake message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.Agent.IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Handshake message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Handshake
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Agent.Handshake;

            /**
             * Decodes a Handshake message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Handshake
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Agent.Handshake;

            /**
             * Verifies a Handshake message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Handshake
             */
            public static fromObject(object: { [k: string]: any }): pb.Agent.Handshake;

            /**
             * Creates a plain object from a Handshake message. Also converts values to other types if specified.
             * @param message Handshake
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.Agent.Handshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Handshake to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Heartbeater. */
        interface IHeartbeater {

            /** Heartbeater R */
            R?: (number|Long|null);
        }

        /** Represents a Heartbeater. */
        class Heartbeater implements IHeartbeater {

            /**
             * Constructs a new Heartbeater.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.Agent.IHeartbeater);

            /** Heartbeater R. */
            public R: (number|Long);

            /**
             * Creates a new Heartbeater instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Heartbeater instance
             */
            public static create(properties?: pb.Agent.IHeartbeater): pb.Agent.Heartbeater;

            /**
             * Encodes the specified Heartbeater message. Does not implicitly {@link pb.Agent.Heartbeater.verify|verify} messages.
             * @param message Heartbeater message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.Agent.IHeartbeater, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Heartbeater message, length delimited. Does not implicitly {@link pb.Agent.Heartbeater.verify|verify} messages.
             * @param message Heartbeater message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.Agent.IHeartbeater, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Heartbeater message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Heartbeater
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Agent.Heartbeater;

            /**
             * Decodes a Heartbeater message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Heartbeater
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Agent.Heartbeater;

            /**
             * Verifies a Heartbeater message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Heartbeater message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Heartbeater
             */
            public static fromObject(object: { [k: string]: any }): pb.Agent.Heartbeater;

            /**
             * Creates a plain object from a Heartbeater message. Also converts values to other types if specified.
             * @param message Heartbeater
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.Agent.Heartbeater, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Heartbeater to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a SFU. */
    interface ISFU {
    }

    /** Represents a SFU. */
    class SFU implements ISFU {

        /**
         * Constructs a new SFU.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISFU);

        /**
         * Creates a new SFU instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SFU instance
         */
        public static create(properties?: pb.ISFU): pb.SFU;

        /**
         * Encodes the specified SFU message. Does not implicitly {@link pb.SFU.verify|verify} messages.
         * @param message SFU message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISFU, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SFU message, length delimited. Does not implicitly {@link pb.SFU.verify|verify} messages.
         * @param message SFU message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISFU, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SFU message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SFU
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU;

        /**
         * Decodes a SFU message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SFU
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU;

        /**
         * Verifies a SFU message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SFU message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SFU
         */
        public static fromObject(object: { [k: string]: any }): pb.SFU;

        /**
         * Creates a plain object from a SFU message. Also converts values to other types if specified.
         * @param message SFU
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SFU, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SFU to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SFU {

        /** Properties of a Subscribe. */
        interface ISubscribe {
        }

        /** Represents a Subscribe. */
        class Subscribe implements ISubscribe {

            /**
             * Constructs a new Subscribe.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.SFU.ISubscribe);

            /**
             * Creates a new Subscribe instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Subscribe instance
             */
            public static create(properties?: pb.SFU.ISubscribe): pb.SFU.Subscribe;

            /**
             * Encodes the specified Subscribe message. Does not implicitly {@link pb.SFU.Subscribe.verify|verify} messages.
             * @param message Subscribe message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.SFU.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Subscribe message, length delimited. Does not implicitly {@link pb.SFU.Subscribe.verify|verify} messages.
             * @param message Subscribe message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.SFU.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Subscribe message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU.Subscribe;

            /**
             * Decodes a Subscribe message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU.Subscribe;

            /**
             * Verifies a Subscribe message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Subscribe message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Subscribe
             */
            public static fromObject(object: { [k: string]: any }): pb.SFU.Subscribe;

            /**
             * Creates a plain object from a Subscribe message. Also converts values to other types if specified.
             * @param message Subscribe
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.SFU.Subscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Subscribe to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Subscribe {

            /** Properties of a Request. */
            interface IRequest {

                /** Request SessionId */
                SessionId?: (string|null);

                /** Request PeerId */
                PeerId?: (string|null);

                /** Request Description */
                Description?: (Uint8Array|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.SFU.Subscribe.IRequest);

                /** Request SessionId. */
                public SessionId: string;

                /** Request PeerId. */
                public PeerId: string;

                /** Request Description. */
                public Description: Uint8Array;

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: pb.SFU.Subscribe.IRequest): pb.SFU.Subscribe.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link pb.SFU.Subscribe.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.SFU.Subscribe.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link pb.SFU.Subscribe.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.SFU.Subscribe.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU.Subscribe.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU.Subscribe.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): pb.SFU.Subscribe.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.SFU.Subscribe.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Reply. */
            interface IReply {

                /** Reply Ok */
                Ok?: (boolean|null);

                /** Reply Description */
                Description?: (Uint8Array|null);
            }

            /** Represents a Reply. */
            class Reply implements IReply {

                /**
                 * Constructs a new Reply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.SFU.Subscribe.IReply);

                /** Reply Ok. */
                public Ok: boolean;

                /** Reply Description. */
                public Description: Uint8Array;

                /**
                 * Creates a new Reply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Reply instance
                 */
                public static create(properties?: pb.SFU.Subscribe.IReply): pb.SFU.Subscribe.Reply;

                /**
                 * Encodes the specified Reply message. Does not implicitly {@link pb.SFU.Subscribe.Reply.verify|verify} messages.
                 * @param message Reply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.SFU.Subscribe.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Reply message, length delimited. Does not implicitly {@link pb.SFU.Subscribe.Reply.verify|verify} messages.
                 * @param message Reply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.SFU.Subscribe.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Reply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU.Subscribe.Reply;

                /**
                 * Decodes a Reply message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU.Subscribe.Reply;

                /**
                 * Verifies a Reply message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Reply
                 */
                public static fromObject(object: { [k: string]: any }): pb.SFU.Subscribe.Reply;

                /**
                 * Creates a plain object from a Reply message. Also converts values to other types if specified.
                 * @param message Reply
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.SFU.Subscribe.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Reply to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Target enum. */
        enum Target {
            PUBLISHER = 0,
            SUBSCRIBER = 1
        }

        /** Properties of a Trickle. */
        interface ITrickle {

            /** Trickle Target */
            Target?: (pb.SFU.Target|null);

            /** Trickle Candidate */
            Candidate?: (string|null);
        }

        /** Represents a Trickle. */
        class Trickle implements ITrickle {

            /**
             * Constructs a new Trickle.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.SFU.ITrickle);

            /** Trickle Target. */
            public Target: pb.SFU.Target;

            /** Trickle Candidate. */
            public Candidate: string;

            /**
             * Creates a new Trickle instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Trickle instance
             */
            public static create(properties?: pb.SFU.ITrickle): pb.SFU.Trickle;

            /**
             * Encodes the specified Trickle message. Does not implicitly {@link pb.SFU.Trickle.verify|verify} messages.
             * @param message Trickle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.SFU.ITrickle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Trickle message, length delimited. Does not implicitly {@link pb.SFU.Trickle.verify|verify} messages.
             * @param message Trickle message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.SFU.ITrickle, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Trickle message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Trickle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU.Trickle;

            /**
             * Decodes a Trickle message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Trickle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU.Trickle;

            /**
             * Verifies a Trickle message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Trickle message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Trickle
             */
            public static fromObject(object: { [k: string]: any }): pb.SFU.Trickle;

            /**
             * Creates a plain object from a Trickle message. Also converts values to other types if specified.
             * @param message Trickle
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.SFU.Trickle, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Trickle to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Signal. */
        interface ISignal {
        }

        /** Represents a Signal. */
        class Signal implements ISignal {

            /**
             * Constructs a new Signal.
             * @param [properties] Properties to set
             */
            constructor(properties?: pb.SFU.ISignal);

            /**
             * Creates a new Signal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Signal instance
             */
            public static create(properties?: pb.SFU.ISignal): pb.SFU.Signal;

            /**
             * Encodes the specified Signal message. Does not implicitly {@link pb.SFU.Signal.verify|verify} messages.
             * @param message Signal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: pb.SFU.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Signal message, length delimited. Does not implicitly {@link pb.SFU.Signal.verify|verify} messages.
             * @param message Signal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: pb.SFU.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Signal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Signal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU.Signal;

            /**
             * Decodes a Signal message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Signal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU.Signal;

            /**
             * Verifies a Signal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Signal message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Signal
             */
            public static fromObject(object: { [k: string]: any }): pb.SFU.Signal;

            /**
             * Creates a plain object from a Signal message. Also converts values to other types if specified.
             * @param message Signal
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: pb.SFU.Signal, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Signal to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Signal {

            /** Properties of a Request. */
            interface IRequest {

                /** Request SessionId */
                SessionId?: (string|null);

                /** Request Description */
                Description?: (Uint8Array|null);

                /** Request trickle */
                trickle?: (pb.SFU.ITrickle|null);
            }

            /** Represents a Request. */
            class Request implements IRequest {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.SFU.Signal.IRequest);

                /** Request SessionId. */
                public SessionId: string;

                /** Request Description. */
                public Description?: (Uint8Array|null);

                /** Request trickle. */
                public trickle?: (pb.SFU.ITrickle|null);

                /** Request Payload. */
                public Payload?: ("Description"|"trickle");

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: pb.SFU.Signal.IRequest): pb.SFU.Signal.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link pb.SFU.Signal.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.SFU.Signal.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link pb.SFU.Signal.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.SFU.Signal.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU.Signal.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU.Signal.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): pb.SFU.Signal.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.SFU.Signal.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Reply. */
            interface IReply {

                /** Reply SessionId */
                SessionId?: (string|null);

                /** Reply PeerId */
                PeerId?: (string|null);

                /** Reply description */
                description?: (Uint8Array|null);

                /** Reply trickle */
                trickle?: (pb.SFU.ITrickle|null);

                /** Reply iceConnectionState */
                iceConnectionState?: (string|null);
            }

            /** Represents a Reply. */
            class Reply implements IReply {

                /**
                 * Constructs a new Reply.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: pb.SFU.Signal.IReply);

                /** Reply SessionId. */
                public SessionId: string;

                /** Reply PeerId. */
                public PeerId: string;

                /** Reply description. */
                public description?: (Uint8Array|null);

                /** Reply trickle. */
                public trickle?: (pb.SFU.ITrickle|null);

                /** Reply iceConnectionState. */
                public iceConnectionState?: (string|null);

                /** Reply Payload. */
                public Payload?: ("description"|"trickle"|"iceConnectionState");

                /**
                 * Creates a new Reply instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Reply instance
                 */
                public static create(properties?: pb.SFU.Signal.IReply): pb.SFU.Signal.Reply;

                /**
                 * Encodes the specified Reply message. Does not implicitly {@link pb.SFU.Signal.Reply.verify|verify} messages.
                 * @param message Reply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: pb.SFU.Signal.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Reply message, length delimited. Does not implicitly {@link pb.SFU.Signal.Reply.verify|verify} messages.
                 * @param message Reply message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: pb.SFU.Signal.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Reply message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SFU.Signal.Reply;

                /**
                 * Decodes a Reply message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SFU.Signal.Reply;

                /**
                 * Verifies a Reply message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Reply
                 */
                public static fromObject(object: { [k: string]: any }): pb.SFU.Signal.Reply;

                /**
                 * Creates a plain object from a Reply message. Also converts values to other types if specified.
                 * @param message Reply
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: pb.SFU.Signal.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Reply to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
