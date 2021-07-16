/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.Agent = (function() {

        /**
         * Properties of an Agent.
         * @memberof pb
         * @interface IAgent
         */

        /**
         * Constructs a new Agent.
         * @memberof pb
         * @classdesc Represents an Agent.
         * @implements IAgent
         * @constructor
         * @param {pb.IAgent=} [properties] Properties to set
         */
        function Agent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Agent instance using the specified properties.
         * @function create
         * @memberof pb.Agent
         * @static
         * @param {pb.IAgent=} [properties] Properties to set
         * @returns {pb.Agent} Agent instance
         */
        Agent.create = function create(properties) {
            return new Agent(properties);
        };

        /**
         * Encodes the specified Agent message. Does not implicitly {@link pb.Agent.verify|verify} messages.
         * @function encode
         * @memberof pb.Agent
         * @static
         * @param {pb.IAgent} message Agent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Agent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Agent message, length delimited. Does not implicitly {@link pb.Agent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.Agent
         * @static
         * @param {pb.IAgent} message Agent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Agent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Agent message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Agent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Agent} Agent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Agent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Agent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Agent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.Agent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.Agent} Agent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Agent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Agent message.
         * @function verify
         * @memberof pb.Agent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Agent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Agent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.Agent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.Agent} Agent
         */
        Agent.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.Agent)
                return object;
            return new $root.pb.Agent();
        };

        /**
         * Creates a plain object from an Agent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.Agent
         * @static
         * @param {pb.Agent} message Agent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Agent.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Agent to JSON.
         * @function toJSON
         * @memberof pb.Agent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Agent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Agent.Handshake = (function() {

            /**
             * Properties of a Handshake.
             * @memberof pb.Agent
             * @interface IHandshake
             * @property {number|Long|null} [E1] Handshake E1
             * @property {number|Long|null} [E2] Handshake E2
             */

            /**
             * Constructs a new Handshake.
             * @memberof pb.Agent
             * @classdesc Represents a Handshake.
             * @implements IHandshake
             * @constructor
             * @param {pb.Agent.IHandshake=} [properties] Properties to set
             */
            function Handshake(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Handshake E1.
             * @member {number|Long} E1
             * @memberof pb.Agent.Handshake
             * @instance
             */
            Handshake.prototype.E1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Handshake E2.
             * @member {number|Long} E2
             * @memberof pb.Agent.Handshake
             * @instance
             */
            Handshake.prototype.E2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Handshake instance using the specified properties.
             * @function create
             * @memberof pb.Agent.Handshake
             * @static
             * @param {pb.Agent.IHandshake=} [properties] Properties to set
             * @returns {pb.Agent.Handshake} Handshake instance
             */
            Handshake.create = function create(properties) {
                return new Handshake(properties);
            };

            /**
             * Encodes the specified Handshake message. Does not implicitly {@link pb.Agent.Handshake.verify|verify} messages.
             * @function encode
             * @memberof pb.Agent.Handshake
             * @static
             * @param {pb.Agent.IHandshake} message Handshake message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Handshake.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.E1 != null && Object.hasOwnProperty.call(message, "E1"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.E1);
                if (message.E2 != null && Object.hasOwnProperty.call(message, "E2"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.E2);
                return writer;
            };

            /**
             * Encodes the specified Handshake message, length delimited. Does not implicitly {@link pb.Agent.Handshake.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pb.Agent.Handshake
             * @static
             * @param {pb.Agent.IHandshake} message Handshake message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Handshake.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Handshake message from the specified reader or buffer.
             * @function decode
             * @memberof pb.Agent.Handshake
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.Agent.Handshake} Handshake
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Handshake.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Agent.Handshake();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.E1 = reader.int64();
                        break;
                    case 2:
                        message.E2 = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Handshake message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pb.Agent.Handshake
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pb.Agent.Handshake} Handshake
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Handshake.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Handshake message.
             * @function verify
             * @memberof pb.Agent.Handshake
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Handshake.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.E1 != null && message.hasOwnProperty("E1"))
                    if (!$util.isInteger(message.E1) && !(message.E1 && $util.isInteger(message.E1.low) && $util.isInteger(message.E1.high)))
                        return "E1: integer|Long expected";
                if (message.E2 != null && message.hasOwnProperty("E2"))
                    if (!$util.isInteger(message.E2) && !(message.E2 && $util.isInteger(message.E2.low) && $util.isInteger(message.E2.high)))
                        return "E2: integer|Long expected";
                return null;
            };

            /**
             * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pb.Agent.Handshake
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pb.Agent.Handshake} Handshake
             */
            Handshake.fromObject = function fromObject(object) {
                if (object instanceof $root.pb.Agent.Handshake)
                    return object;
                var message = new $root.pb.Agent.Handshake();
                if (object.E1 != null)
                    if ($util.Long)
                        (message.E1 = $util.Long.fromValue(object.E1)).unsigned = false;
                    else if (typeof object.E1 === "string")
                        message.E1 = parseInt(object.E1, 10);
                    else if (typeof object.E1 === "number")
                        message.E1 = object.E1;
                    else if (typeof object.E1 === "object")
                        message.E1 = new $util.LongBits(object.E1.low >>> 0, object.E1.high >>> 0).toNumber();
                if (object.E2 != null)
                    if ($util.Long)
                        (message.E2 = $util.Long.fromValue(object.E2)).unsigned = false;
                    else if (typeof object.E2 === "string")
                        message.E2 = parseInt(object.E2, 10);
                    else if (typeof object.E2 === "number")
                        message.E2 = object.E2;
                    else if (typeof object.E2 === "object")
                        message.E2 = new $util.LongBits(object.E2.low >>> 0, object.E2.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Handshake message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pb.Agent.Handshake
             * @static
             * @param {pb.Agent.Handshake} message Handshake
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Handshake.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.E1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.E1 = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.E2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.E2 = options.longs === String ? "0" : 0;
                }
                if (message.E1 != null && message.hasOwnProperty("E1"))
                    if (typeof message.E1 === "number")
                        object.E1 = options.longs === String ? String(message.E1) : message.E1;
                    else
                        object.E1 = options.longs === String ? $util.Long.prototype.toString.call(message.E1) : options.longs === Number ? new $util.LongBits(message.E1.low >>> 0, message.E1.high >>> 0).toNumber() : message.E1;
                if (message.E2 != null && message.hasOwnProperty("E2"))
                    if (typeof message.E2 === "number")
                        object.E2 = options.longs === String ? String(message.E2) : message.E2;
                    else
                        object.E2 = options.longs === String ? $util.Long.prototype.toString.call(message.E2) : options.longs === Number ? new $util.LongBits(message.E2.low >>> 0, message.E2.high >>> 0).toNumber() : message.E2;
                return object;
            };

            /**
             * Converts this Handshake to JSON.
             * @function toJSON
             * @memberof pb.Agent.Handshake
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Handshake.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Handshake;
        })();

        Agent.Heartbeater = (function() {

            /**
             * Properties of a Heartbeater.
             * @memberof pb.Agent
             * @interface IHeartbeater
             * @property {number|Long|null} [R] Heartbeater R
             */

            /**
             * Constructs a new Heartbeater.
             * @memberof pb.Agent
             * @classdesc Represents a Heartbeater.
             * @implements IHeartbeater
             * @constructor
             * @param {pb.Agent.IHeartbeater=} [properties] Properties to set
             */
            function Heartbeater(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Heartbeater R.
             * @member {number|Long} R
             * @memberof pb.Agent.Heartbeater
             * @instance
             */
            Heartbeater.prototype.R = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Heartbeater instance using the specified properties.
             * @function create
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {pb.Agent.IHeartbeater=} [properties] Properties to set
             * @returns {pb.Agent.Heartbeater} Heartbeater instance
             */
            Heartbeater.create = function create(properties) {
                return new Heartbeater(properties);
            };

            /**
             * Encodes the specified Heartbeater message. Does not implicitly {@link pb.Agent.Heartbeater.verify|verify} messages.
             * @function encode
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {pb.Agent.IHeartbeater} message Heartbeater message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heartbeater.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.R != null && Object.hasOwnProperty.call(message, "R"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.R);
                return writer;
            };

            /**
             * Encodes the specified Heartbeater message, length delimited. Does not implicitly {@link pb.Agent.Heartbeater.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {pb.Agent.IHeartbeater} message Heartbeater message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heartbeater.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Heartbeater message from the specified reader or buffer.
             * @function decode
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.Agent.Heartbeater} Heartbeater
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heartbeater.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Agent.Heartbeater();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.R = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Heartbeater message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pb.Agent.Heartbeater} Heartbeater
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heartbeater.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Heartbeater message.
             * @function verify
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Heartbeater.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.R != null && message.hasOwnProperty("R"))
                    if (!$util.isInteger(message.R) && !(message.R && $util.isInteger(message.R.low) && $util.isInteger(message.R.high)))
                        return "R: integer|Long expected";
                return null;
            };

            /**
             * Creates a Heartbeater message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pb.Agent.Heartbeater} Heartbeater
             */
            Heartbeater.fromObject = function fromObject(object) {
                if (object instanceof $root.pb.Agent.Heartbeater)
                    return object;
                var message = new $root.pb.Agent.Heartbeater();
                if (object.R != null)
                    if ($util.Long)
                        (message.R = $util.Long.fromValue(object.R)).unsigned = false;
                    else if (typeof object.R === "string")
                        message.R = parseInt(object.R, 10);
                    else if (typeof object.R === "number")
                        message.R = object.R;
                    else if (typeof object.R === "object")
                        message.R = new $util.LongBits(object.R.low >>> 0, object.R.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a Heartbeater message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pb.Agent.Heartbeater
             * @static
             * @param {pb.Agent.Heartbeater} message Heartbeater
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Heartbeater.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.R = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.R = options.longs === String ? "0" : 0;
                if (message.R != null && message.hasOwnProperty("R"))
                    if (typeof message.R === "number")
                        object.R = options.longs === String ? String(message.R) : message.R;
                    else
                        object.R = options.longs === String ? $util.Long.prototype.toString.call(message.R) : options.longs === Number ? new $util.LongBits(message.R.low >>> 0, message.R.high >>> 0).toNumber() : message.R;
                return object;
            };

            /**
             * Converts this Heartbeater to JSON.
             * @function toJSON
             * @memberof pb.Agent.Heartbeater
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Heartbeater.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Heartbeater;
        })();

        return Agent;
    })();

    pb.SFU = (function() {

        /**
         * Properties of a SFU.
         * @memberof pb
         * @interface ISFU
         */

        /**
         * Constructs a new SFU.
         * @memberof pb
         * @classdesc Represents a SFU.
         * @implements ISFU
         * @constructor
         * @param {pb.ISFU=} [properties] Properties to set
         */
        function SFU(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SFU instance using the specified properties.
         * @function create
         * @memberof pb.SFU
         * @static
         * @param {pb.ISFU=} [properties] Properties to set
         * @returns {pb.SFU} SFU instance
         */
        SFU.create = function create(properties) {
            return new SFU(properties);
        };

        /**
         * Encodes the specified SFU message. Does not implicitly {@link pb.SFU.verify|verify} messages.
         * @function encode
         * @memberof pb.SFU
         * @static
         * @param {pb.ISFU} message SFU message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SFU.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SFU message, length delimited. Does not implicitly {@link pb.SFU.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pb.SFU
         * @static
         * @param {pb.ISFU} message SFU message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SFU.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SFU message from the specified reader or buffer.
         * @function decode
         * @memberof pb.SFU
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.SFU} SFU
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SFU.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SFU message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pb.SFU
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pb.SFU} SFU
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SFU.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SFU message.
         * @function verify
         * @memberof pb.SFU
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SFU.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SFU message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pb.SFU
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pb.SFU} SFU
         */
        SFU.fromObject = function fromObject(object) {
            if (object instanceof $root.pb.SFU)
                return object;
            return new $root.pb.SFU();
        };

        /**
         * Creates a plain object from a SFU message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pb.SFU
         * @static
         * @param {pb.SFU} message SFU
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SFU.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SFU to JSON.
         * @function toJSON
         * @memberof pb.SFU
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SFU.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        SFU.Subscribe = (function() {

            /**
             * Properties of a Subscribe.
             * @memberof pb.SFU
             * @interface ISubscribe
             */

            /**
             * Constructs a new Subscribe.
             * @memberof pb.SFU
             * @classdesc Represents a Subscribe.
             * @implements ISubscribe
             * @constructor
             * @param {pb.SFU.ISubscribe=} [properties] Properties to set
             */
            function Subscribe(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Subscribe instance using the specified properties.
             * @function create
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {pb.SFU.ISubscribe=} [properties] Properties to set
             * @returns {pb.SFU.Subscribe} Subscribe instance
             */
            Subscribe.create = function create(properties) {
                return new Subscribe(properties);
            };

            /**
             * Encodes the specified Subscribe message. Does not implicitly {@link pb.SFU.Subscribe.verify|verify} messages.
             * @function encode
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {pb.SFU.ISubscribe} message Subscribe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Subscribe.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Subscribe message, length delimited. Does not implicitly {@link pb.SFU.Subscribe.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {pb.SFU.ISubscribe} message Subscribe message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Subscribe.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Subscribe message from the specified reader or buffer.
             * @function decode
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.SFU.Subscribe} Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Subscribe.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU.Subscribe();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Subscribe message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pb.SFU.Subscribe} Subscribe
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Subscribe.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Subscribe message.
             * @function verify
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Subscribe.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Subscribe message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pb.SFU.Subscribe} Subscribe
             */
            Subscribe.fromObject = function fromObject(object) {
                if (object instanceof $root.pb.SFU.Subscribe)
                    return object;
                return new $root.pb.SFU.Subscribe();
            };

            /**
             * Creates a plain object from a Subscribe message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pb.SFU.Subscribe
             * @static
             * @param {pb.SFU.Subscribe} message Subscribe
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Subscribe.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Subscribe to JSON.
             * @function toJSON
             * @memberof pb.SFU.Subscribe
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Subscribe.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Subscribe.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof pb.SFU.Subscribe
                 * @interface IRequest
                 * @property {string|null} [SessionId] Request SessionId
                 * @property {string|null} [PeerId] Request PeerId
                 * @property {Uint8Array|null} [Description] Request Description
                 */

                /**
                 * Constructs a new Request.
                 * @memberof pb.SFU.Subscribe
                 * @classdesc Represents a Request.
                 * @implements IRequest
                 * @constructor
                 * @param {pb.SFU.Subscribe.IRequest=} [properties] Properties to set
                 */
                function Request(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Request SessionId.
                 * @member {string} SessionId
                 * @memberof pb.SFU.Subscribe.Request
                 * @instance
                 */
                Request.prototype.SessionId = "";

                /**
                 * Request PeerId.
                 * @member {string} PeerId
                 * @memberof pb.SFU.Subscribe.Request
                 * @instance
                 */
                Request.prototype.PeerId = "";

                /**
                 * Request Description.
                 * @member {Uint8Array} Description
                 * @memberof pb.SFU.Subscribe.Request
                 * @instance
                 */
                Request.prototype.Description = $util.newBuffer([]);

                /**
                 * Creates a new Request instance using the specified properties.
                 * @function create
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {pb.SFU.Subscribe.IRequest=} [properties] Properties to set
                 * @returns {pb.SFU.Subscribe.Request} Request instance
                 */
                Request.create = function create(properties) {
                    return new Request(properties);
                };

                /**
                 * Encodes the specified Request message. Does not implicitly {@link pb.SFU.Subscribe.Request.verify|verify} messages.
                 * @function encode
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {pb.SFU.Subscribe.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.SessionId != null && Object.hasOwnProperty.call(message, "SessionId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.SessionId);
                    if (message.PeerId != null && Object.hasOwnProperty.call(message, "PeerId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.PeerId);
                    if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Description);
                    return writer;
                };

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link pb.SFU.Subscribe.Request.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {pb.SFU.Subscribe.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.SFU.Subscribe.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU.Subscribe.Request();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.SessionId = reader.string();
                            break;
                        case 2:
                            message.PeerId = reader.string();
                            break;
                        case 3:
                            message.Description = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.SFU.Subscribe.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Request message.
                 * @function verify
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Request.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.SessionId != null && message.hasOwnProperty("SessionId"))
                        if (!$util.isString(message.SessionId))
                            return "SessionId: string expected";
                    if (message.PeerId != null && message.hasOwnProperty("PeerId"))
                        if (!$util.isString(message.PeerId))
                            return "PeerId: string expected";
                    if (message.Description != null && message.hasOwnProperty("Description"))
                        if (!(message.Description && typeof message.Description.length === "number" || $util.isString(message.Description)))
                            return "Description: buffer expected";
                    return null;
                };

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.SFU.Subscribe.Request} Request
                 */
                Request.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.SFU.Subscribe.Request)
                        return object;
                    var message = new $root.pb.SFU.Subscribe.Request();
                    if (object.SessionId != null)
                        message.SessionId = String(object.SessionId);
                    if (object.PeerId != null)
                        message.PeerId = String(object.PeerId);
                    if (object.Description != null)
                        if (typeof object.Description === "string")
                            $util.base64.decode(object.Description, message.Description = $util.newBuffer($util.base64.length(object.Description)), 0);
                        else if (object.Description.length)
                            message.Description = object.Description;
                    return message;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.SFU.Subscribe.Request
                 * @static
                 * @param {pb.SFU.Subscribe.Request} message Request
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.SessionId = "";
                        object.PeerId = "";
                        if (options.bytes === String)
                            object.Description = "";
                        else {
                            object.Description = [];
                            if (options.bytes !== Array)
                                object.Description = $util.newBuffer(object.Description);
                        }
                    }
                    if (message.SessionId != null && message.hasOwnProperty("SessionId"))
                        object.SessionId = message.SessionId;
                    if (message.PeerId != null && message.hasOwnProperty("PeerId"))
                        object.PeerId = message.PeerId;
                    if (message.Description != null && message.hasOwnProperty("Description"))
                        object.Description = options.bytes === String ? $util.base64.encode(message.Description, 0, message.Description.length) : options.bytes === Array ? Array.prototype.slice.call(message.Description) : message.Description;
                    return object;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof pb.SFU.Subscribe.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            Subscribe.Reply = (function() {

                /**
                 * Properties of a Reply.
                 * @memberof pb.SFU.Subscribe
                 * @interface IReply
                 * @property {boolean|null} [Ok] Reply Ok
                 * @property {Uint8Array|null} [Description] Reply Description
                 */

                /**
                 * Constructs a new Reply.
                 * @memberof pb.SFU.Subscribe
                 * @classdesc Represents a Reply.
                 * @implements IReply
                 * @constructor
                 * @param {pb.SFU.Subscribe.IReply=} [properties] Properties to set
                 */
                function Reply(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Reply Ok.
                 * @member {boolean} Ok
                 * @memberof pb.SFU.Subscribe.Reply
                 * @instance
                 */
                Reply.prototype.Ok = false;

                /**
                 * Reply Description.
                 * @member {Uint8Array} Description
                 * @memberof pb.SFU.Subscribe.Reply
                 * @instance
                 */
                Reply.prototype.Description = $util.newBuffer([]);

                /**
                 * Creates a new Reply instance using the specified properties.
                 * @function create
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {pb.SFU.Subscribe.IReply=} [properties] Properties to set
                 * @returns {pb.SFU.Subscribe.Reply} Reply instance
                 */
                Reply.create = function create(properties) {
                    return new Reply(properties);
                };

                /**
                 * Encodes the specified Reply message. Does not implicitly {@link pb.SFU.Subscribe.Reply.verify|verify} messages.
                 * @function encode
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {pb.SFU.Subscribe.IReply} message Reply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reply.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.Ok != null && Object.hasOwnProperty.call(message, "Ok"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Ok);
                    if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Description);
                    return writer;
                };

                /**
                 * Encodes the specified Reply message, length delimited. Does not implicitly {@link pb.SFU.Subscribe.Reply.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {pb.SFU.Subscribe.IReply} message Reply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reply.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Reply message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.SFU.Subscribe.Reply} Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reply.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU.Subscribe.Reply();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.Ok = reader.bool();
                            break;
                        case 2:
                            message.Description = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Reply message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.SFU.Subscribe.Reply} Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reply.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Reply message.
                 * @function verify
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Reply.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.Ok != null && message.hasOwnProperty("Ok"))
                        if (typeof message.Ok !== "boolean")
                            return "Ok: boolean expected";
                    if (message.Description != null && message.hasOwnProperty("Description"))
                        if (!(message.Description && typeof message.Description.length === "number" || $util.isString(message.Description)))
                            return "Description: buffer expected";
                    return null;
                };

                /**
                 * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.SFU.Subscribe.Reply} Reply
                 */
                Reply.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.SFU.Subscribe.Reply)
                        return object;
                    var message = new $root.pb.SFU.Subscribe.Reply();
                    if (object.Ok != null)
                        message.Ok = Boolean(object.Ok);
                    if (object.Description != null)
                        if (typeof object.Description === "string")
                            $util.base64.decode(object.Description, message.Description = $util.newBuffer($util.base64.length(object.Description)), 0);
                        else if (object.Description.length)
                            message.Description = object.Description;
                    return message;
                };

                /**
                 * Creates a plain object from a Reply message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.SFU.Subscribe.Reply
                 * @static
                 * @param {pb.SFU.Subscribe.Reply} message Reply
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Reply.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.Ok = false;
                        if (options.bytes === String)
                            object.Description = "";
                        else {
                            object.Description = [];
                            if (options.bytes !== Array)
                                object.Description = $util.newBuffer(object.Description);
                        }
                    }
                    if (message.Ok != null && message.hasOwnProperty("Ok"))
                        object.Ok = message.Ok;
                    if (message.Description != null && message.hasOwnProperty("Description"))
                        object.Description = options.bytes === String ? $util.base64.encode(message.Description, 0, message.Description.length) : options.bytes === Array ? Array.prototype.slice.call(message.Description) : message.Description;
                    return object;
                };

                /**
                 * Converts this Reply to JSON.
                 * @function toJSON
                 * @memberof pb.SFU.Subscribe.Reply
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Reply.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Reply;
            })();

            return Subscribe;
        })();

        /**
         * Target enum.
         * @name pb.SFU.Target
         * @enum {number}
         * @property {number} PUBLISHER=0 PUBLISHER value
         * @property {number} SUBSCRIBER=1 SUBSCRIBER value
         */
        SFU.Target = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PUBLISHER"] = 0;
            values[valuesById[1] = "SUBSCRIBER"] = 1;
            return values;
        })();

        SFU.Trickle = (function() {

            /**
             * Properties of a Trickle.
             * @memberof pb.SFU
             * @interface ITrickle
             * @property {pb.SFU.Target|null} [Target] Trickle Target
             * @property {string|null} [Candidate] Trickle Candidate
             */

            /**
             * Constructs a new Trickle.
             * @memberof pb.SFU
             * @classdesc Represents a Trickle.
             * @implements ITrickle
             * @constructor
             * @param {pb.SFU.ITrickle=} [properties] Properties to set
             */
            function Trickle(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Trickle Target.
             * @member {pb.SFU.Target} Target
             * @memberof pb.SFU.Trickle
             * @instance
             */
            Trickle.prototype.Target = 0;

            /**
             * Trickle Candidate.
             * @member {string} Candidate
             * @memberof pb.SFU.Trickle
             * @instance
             */
            Trickle.prototype.Candidate = "";

            /**
             * Creates a new Trickle instance using the specified properties.
             * @function create
             * @memberof pb.SFU.Trickle
             * @static
             * @param {pb.SFU.ITrickle=} [properties] Properties to set
             * @returns {pb.SFU.Trickle} Trickle instance
             */
            Trickle.create = function create(properties) {
                return new Trickle(properties);
            };

            /**
             * Encodes the specified Trickle message. Does not implicitly {@link pb.SFU.Trickle.verify|verify} messages.
             * @function encode
             * @memberof pb.SFU.Trickle
             * @static
             * @param {pb.SFU.ITrickle} message Trickle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Trickle.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Target != null && Object.hasOwnProperty.call(message, "Target"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Target);
                if (message.Candidate != null && Object.hasOwnProperty.call(message, "Candidate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Candidate);
                return writer;
            };

            /**
             * Encodes the specified Trickle message, length delimited. Does not implicitly {@link pb.SFU.Trickle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pb.SFU.Trickle
             * @static
             * @param {pb.SFU.ITrickle} message Trickle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Trickle.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Trickle message from the specified reader or buffer.
             * @function decode
             * @memberof pb.SFU.Trickle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.SFU.Trickle} Trickle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Trickle.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU.Trickle();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Target = reader.int32();
                        break;
                    case 2:
                        message.Candidate = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Trickle message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pb.SFU.Trickle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pb.SFU.Trickle} Trickle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Trickle.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Trickle message.
             * @function verify
             * @memberof pb.SFU.Trickle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Trickle.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Target != null && message.hasOwnProperty("Target"))
                    switch (message.Target) {
                    default:
                        return "Target: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.Candidate != null && message.hasOwnProperty("Candidate"))
                    if (!$util.isString(message.Candidate))
                        return "Candidate: string expected";
                return null;
            };

            /**
             * Creates a Trickle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pb.SFU.Trickle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pb.SFU.Trickle} Trickle
             */
            Trickle.fromObject = function fromObject(object) {
                if (object instanceof $root.pb.SFU.Trickle)
                    return object;
                var message = new $root.pb.SFU.Trickle();
                switch (object.Target) {
                case "PUBLISHER":
                case 0:
                    message.Target = 0;
                    break;
                case "SUBSCRIBER":
                case 1:
                    message.Target = 1;
                    break;
                }
                if (object.Candidate != null)
                    message.Candidate = String(object.Candidate);
                return message;
            };

            /**
             * Creates a plain object from a Trickle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pb.SFU.Trickle
             * @static
             * @param {pb.SFU.Trickle} message Trickle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Trickle.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Target = options.enums === String ? "PUBLISHER" : 0;
                    object.Candidate = "";
                }
                if (message.Target != null && message.hasOwnProperty("Target"))
                    object.Target = options.enums === String ? $root.pb.SFU.Target[message.Target] : message.Target;
                if (message.Candidate != null && message.hasOwnProperty("Candidate"))
                    object.Candidate = message.Candidate;
                return object;
            };

            /**
             * Converts this Trickle to JSON.
             * @function toJSON
             * @memberof pb.SFU.Trickle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Trickle.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Trickle;
        })();

        SFU.Signal = (function() {

            /**
             * Properties of a Signal.
             * @memberof pb.SFU
             * @interface ISignal
             */

            /**
             * Constructs a new Signal.
             * @memberof pb.SFU
             * @classdesc Represents a Signal.
             * @implements ISignal
             * @constructor
             * @param {pb.SFU.ISignal=} [properties] Properties to set
             */
            function Signal(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Signal instance using the specified properties.
             * @function create
             * @memberof pb.SFU.Signal
             * @static
             * @param {pb.SFU.ISignal=} [properties] Properties to set
             * @returns {pb.SFU.Signal} Signal instance
             */
            Signal.create = function create(properties) {
                return new Signal(properties);
            };

            /**
             * Encodes the specified Signal message. Does not implicitly {@link pb.SFU.Signal.verify|verify} messages.
             * @function encode
             * @memberof pb.SFU.Signal
             * @static
             * @param {pb.SFU.ISignal} message Signal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Signal.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Signal message, length delimited. Does not implicitly {@link pb.SFU.Signal.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pb.SFU.Signal
             * @static
             * @param {pb.SFU.ISignal} message Signal message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Signal.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Signal message from the specified reader or buffer.
             * @function decode
             * @memberof pb.SFU.Signal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pb.SFU.Signal} Signal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Signal.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU.Signal();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Signal message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pb.SFU.Signal
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pb.SFU.Signal} Signal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Signal.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Signal message.
             * @function verify
             * @memberof pb.SFU.Signal
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Signal.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Signal message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pb.SFU.Signal
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pb.SFU.Signal} Signal
             */
            Signal.fromObject = function fromObject(object) {
                if (object instanceof $root.pb.SFU.Signal)
                    return object;
                return new $root.pb.SFU.Signal();
            };

            /**
             * Creates a plain object from a Signal message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pb.SFU.Signal
             * @static
             * @param {pb.SFU.Signal} message Signal
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Signal.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Signal to JSON.
             * @function toJSON
             * @memberof pb.SFU.Signal
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Signal.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Signal.Request = (function() {

                /**
                 * Properties of a Request.
                 * @memberof pb.SFU.Signal
                 * @interface IRequest
                 * @property {string|null} [SessionId] Request SessionId
                 * @property {Uint8Array|null} [Description] Request Description
                 * @property {pb.SFU.ITrickle|null} [trickle] Request trickle
                 */

                /**
                 * Constructs a new Request.
                 * @memberof pb.SFU.Signal
                 * @classdesc Represents a Request.
                 * @implements IRequest
                 * @constructor
                 * @param {pb.SFU.Signal.IRequest=} [properties] Properties to set
                 */
                function Request(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Request SessionId.
                 * @member {string} SessionId
                 * @memberof pb.SFU.Signal.Request
                 * @instance
                 */
                Request.prototype.SessionId = "";

                /**
                 * Request Description.
                 * @member {Uint8Array|null|undefined} Description
                 * @memberof pb.SFU.Signal.Request
                 * @instance
                 */
                Request.prototype.Description = null;

                /**
                 * Request trickle.
                 * @member {pb.SFU.ITrickle|null|undefined} trickle
                 * @memberof pb.SFU.Signal.Request
                 * @instance
                 */
                Request.prototype.trickle = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Request Payload.
                 * @member {"Description"|"trickle"|undefined} Payload
                 * @memberof pb.SFU.Signal.Request
                 * @instance
                 */
                Object.defineProperty(Request.prototype, "Payload", {
                    get: $util.oneOfGetter($oneOfFields = ["Description", "trickle"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Request instance using the specified properties.
                 * @function create
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {pb.SFU.Signal.IRequest=} [properties] Properties to set
                 * @returns {pb.SFU.Signal.Request} Request instance
                 */
                Request.create = function create(properties) {
                    return new Request(properties);
                };

                /**
                 * Encodes the specified Request message. Does not implicitly {@link pb.SFU.Signal.Request.verify|verify} messages.
                 * @function encode
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {pb.SFU.Signal.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.SessionId != null && Object.hasOwnProperty.call(message, "SessionId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.SessionId);
                    if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Description);
                    if (message.trickle != null && Object.hasOwnProperty.call(message, "trickle"))
                        $root.pb.SFU.Trickle.encode(message.trickle, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link pb.SFU.Signal.Request.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {pb.SFU.Signal.IRequest} message Request message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Request.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.SFU.Signal.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU.Signal.Request();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.SessionId = reader.string();
                            break;
                        case 2:
                            message.Description = reader.bytes();
                            break;
                        case 3:
                            message.trickle = $root.pb.SFU.Trickle.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.SFU.Signal.Request} Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Request.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Request message.
                 * @function verify
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Request.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.SessionId != null && message.hasOwnProperty("SessionId"))
                        if (!$util.isString(message.SessionId))
                            return "SessionId: string expected";
                    if (message.Description != null && message.hasOwnProperty("Description")) {
                        properties.Payload = 1;
                        if (!(message.Description && typeof message.Description.length === "number" || $util.isString(message.Description)))
                            return "Description: buffer expected";
                    }
                    if (message.trickle != null && message.hasOwnProperty("trickle")) {
                        if (properties.Payload === 1)
                            return "Payload: multiple values";
                        properties.Payload = 1;
                        {
                            var error = $root.pb.SFU.Trickle.verify(message.trickle);
                            if (error)
                                return "trickle." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.SFU.Signal.Request} Request
                 */
                Request.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.SFU.Signal.Request)
                        return object;
                    var message = new $root.pb.SFU.Signal.Request();
                    if (object.SessionId != null)
                        message.SessionId = String(object.SessionId);
                    if (object.Description != null)
                        if (typeof object.Description === "string")
                            $util.base64.decode(object.Description, message.Description = $util.newBuffer($util.base64.length(object.Description)), 0);
                        else if (object.Description.length)
                            message.Description = object.Description;
                    if (object.trickle != null) {
                        if (typeof object.trickle !== "object")
                            throw TypeError(".pb.SFU.Signal.Request.trickle: object expected");
                        message.trickle = $root.pb.SFU.Trickle.fromObject(object.trickle);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.SFU.Signal.Request
                 * @static
                 * @param {pb.SFU.Signal.Request} message Request
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Request.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.SessionId = "";
                    if (message.SessionId != null && message.hasOwnProperty("SessionId"))
                        object.SessionId = message.SessionId;
                    if (message.Description != null && message.hasOwnProperty("Description")) {
                        object.Description = options.bytes === String ? $util.base64.encode(message.Description, 0, message.Description.length) : options.bytes === Array ? Array.prototype.slice.call(message.Description) : message.Description;
                        if (options.oneofs)
                            object.Payload = "Description";
                    }
                    if (message.trickle != null && message.hasOwnProperty("trickle")) {
                        object.trickle = $root.pb.SFU.Trickle.toObject(message.trickle, options);
                        if (options.oneofs)
                            object.Payload = "trickle";
                    }
                    return object;
                };

                /**
                 * Converts this Request to JSON.
                 * @function toJSON
                 * @memberof pb.SFU.Signal.Request
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Request.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Request;
            })();

            Signal.Reply = (function() {

                /**
                 * Properties of a Reply.
                 * @memberof pb.SFU.Signal
                 * @interface IReply
                 * @property {string|null} [SessionId] Reply SessionId
                 * @property {string|null} [PeerId] Reply PeerId
                 * @property {Uint8Array|null} [description] Reply description
                 * @property {pb.SFU.ITrickle|null} [trickle] Reply trickle
                 * @property {string|null} [iceConnectionState] Reply iceConnectionState
                 */

                /**
                 * Constructs a new Reply.
                 * @memberof pb.SFU.Signal
                 * @classdesc Represents a Reply.
                 * @implements IReply
                 * @constructor
                 * @param {pb.SFU.Signal.IReply=} [properties] Properties to set
                 */
                function Reply(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Reply SessionId.
                 * @member {string} SessionId
                 * @memberof pb.SFU.Signal.Reply
                 * @instance
                 */
                Reply.prototype.SessionId = "";

                /**
                 * Reply PeerId.
                 * @member {string} PeerId
                 * @memberof pb.SFU.Signal.Reply
                 * @instance
                 */
                Reply.prototype.PeerId = "";

                /**
                 * Reply description.
                 * @member {Uint8Array|null|undefined} description
                 * @memberof pb.SFU.Signal.Reply
                 * @instance
                 */
                Reply.prototype.description = null;

                /**
                 * Reply trickle.
                 * @member {pb.SFU.ITrickle|null|undefined} trickle
                 * @memberof pb.SFU.Signal.Reply
                 * @instance
                 */
                Reply.prototype.trickle = null;

                /**
                 * Reply iceConnectionState.
                 * @member {string|null|undefined} iceConnectionState
                 * @memberof pb.SFU.Signal.Reply
                 * @instance
                 */
                Reply.prototype.iceConnectionState = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Reply Payload.
                 * @member {"description"|"trickle"|"iceConnectionState"|undefined} Payload
                 * @memberof pb.SFU.Signal.Reply
                 * @instance
                 */
                Object.defineProperty(Reply.prototype, "Payload", {
                    get: $util.oneOfGetter($oneOfFields = ["description", "trickle", "iceConnectionState"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Reply instance using the specified properties.
                 * @function create
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {pb.SFU.Signal.IReply=} [properties] Properties to set
                 * @returns {pb.SFU.Signal.Reply} Reply instance
                 */
                Reply.create = function create(properties) {
                    return new Reply(properties);
                };

                /**
                 * Encodes the specified Reply message. Does not implicitly {@link pb.SFU.Signal.Reply.verify|verify} messages.
                 * @function encode
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {pb.SFU.Signal.IReply} message Reply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reply.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.SessionId != null && Object.hasOwnProperty.call(message, "SessionId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.SessionId);
                    if (message.PeerId != null && Object.hasOwnProperty.call(message, "PeerId"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.PeerId);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.description);
                    if (message.trickle != null && Object.hasOwnProperty.call(message, "trickle"))
                        $root.pb.SFU.Trickle.encode(message.trickle, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.iceConnectionState != null && Object.hasOwnProperty.call(message, "iceConnectionState"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.iceConnectionState);
                    return writer;
                };

                /**
                 * Encodes the specified Reply message, length delimited. Does not implicitly {@link pb.SFU.Signal.Reply.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {pb.SFU.Signal.IReply} message Reply message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Reply.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Reply message from the specified reader or buffer.
                 * @function decode
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {pb.SFU.Signal.Reply} Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reply.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.SFU.Signal.Reply();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.SessionId = reader.string();
                            break;
                        case 2:
                            message.PeerId = reader.string();
                            break;
                        case 3:
                            message.description = reader.bytes();
                            break;
                        case 4:
                            message.trickle = $root.pb.SFU.Trickle.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.iceConnectionState = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Reply message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {pb.SFU.Signal.Reply} Reply
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Reply.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Reply message.
                 * @function verify
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Reply.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.SessionId != null && message.hasOwnProperty("SessionId"))
                        if (!$util.isString(message.SessionId))
                            return "SessionId: string expected";
                    if (message.PeerId != null && message.hasOwnProperty("PeerId"))
                        if (!$util.isString(message.PeerId))
                            return "PeerId: string expected";
                    if (message.description != null && message.hasOwnProperty("description")) {
                        properties.Payload = 1;
                        if (!(message.description && typeof message.description.length === "number" || $util.isString(message.description)))
                            return "description: buffer expected";
                    }
                    if (message.trickle != null && message.hasOwnProperty("trickle")) {
                        if (properties.Payload === 1)
                            return "Payload: multiple values";
                        properties.Payload = 1;
                        {
                            var error = $root.pb.SFU.Trickle.verify(message.trickle);
                            if (error)
                                return "trickle." + error;
                        }
                    }
                    if (message.iceConnectionState != null && message.hasOwnProperty("iceConnectionState")) {
                        if (properties.Payload === 1)
                            return "Payload: multiple values";
                        properties.Payload = 1;
                        if (!$util.isString(message.iceConnectionState))
                            return "iceConnectionState: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a Reply message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {pb.SFU.Signal.Reply} Reply
                 */
                Reply.fromObject = function fromObject(object) {
                    if (object instanceof $root.pb.SFU.Signal.Reply)
                        return object;
                    var message = new $root.pb.SFU.Signal.Reply();
                    if (object.SessionId != null)
                        message.SessionId = String(object.SessionId);
                    if (object.PeerId != null)
                        message.PeerId = String(object.PeerId);
                    if (object.description != null)
                        if (typeof object.description === "string")
                            $util.base64.decode(object.description, message.description = $util.newBuffer($util.base64.length(object.description)), 0);
                        else if (object.description.length)
                            message.description = object.description;
                    if (object.trickle != null) {
                        if (typeof object.trickle !== "object")
                            throw TypeError(".pb.SFU.Signal.Reply.trickle: object expected");
                        message.trickle = $root.pb.SFU.Trickle.fromObject(object.trickle);
                    }
                    if (object.iceConnectionState != null)
                        message.iceConnectionState = String(object.iceConnectionState);
                    return message;
                };

                /**
                 * Creates a plain object from a Reply message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof pb.SFU.Signal.Reply
                 * @static
                 * @param {pb.SFU.Signal.Reply} message Reply
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Reply.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.SessionId = "";
                        object.PeerId = "";
                    }
                    if (message.SessionId != null && message.hasOwnProperty("SessionId"))
                        object.SessionId = message.SessionId;
                    if (message.PeerId != null && message.hasOwnProperty("PeerId"))
                        object.PeerId = message.PeerId;
                    if (message.description != null && message.hasOwnProperty("description")) {
                        object.description = options.bytes === String ? $util.base64.encode(message.description, 0, message.description.length) : options.bytes === Array ? Array.prototype.slice.call(message.description) : message.description;
                        if (options.oneofs)
                            object.Payload = "description";
                    }
                    if (message.trickle != null && message.hasOwnProperty("trickle")) {
                        object.trickle = $root.pb.SFU.Trickle.toObject(message.trickle, options);
                        if (options.oneofs)
                            object.Payload = "trickle";
                    }
                    if (message.iceConnectionState != null && message.hasOwnProperty("iceConnectionState")) {
                        object.iceConnectionState = message.iceConnectionState;
                        if (options.oneofs)
                            object.Payload = "iceConnectionState";
                    }
                    return object;
                };

                /**
                 * Converts this Reply to JSON.
                 * @function toJSON
                 * @memberof pb.SFU.Signal.Reply
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Reply.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Reply;
            })();

            return Signal;
        })();

        return SFU;
    })();

    return pb;
})();

module.exports = $root;
