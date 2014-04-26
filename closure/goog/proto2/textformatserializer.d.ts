declare module goog.proto2 {

    /**
     * TextFormatSerializer, a serializer which turns Messages into the human
     * readable text format.
     * @param {boolean=} opt_ignoreMissingFields If true, then fields that cannot be
     *     found on the proto when parsing the text format will be ignored.
     * @param {boolean=} opt_useEnumValues If true, serialization code for enums
     *     will use enum integer values instead of human-readable symbolic names.
     * @constructor
     * @extends {goog.proto2.Serializer}
     * @final
     */
    export class TextFormatSerializer extends goog.proto2.Serializer {
        constructor(opt_ignoreMissingFields?: boolean, opt_useEnumValues?: boolean);
        
        /**
         * Deserializes a message from text format and places the data in the message.
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {*} data The text format data.
         * @return {?string} The parse error or null on success.
         * @override
         */
        deserializeTo(message: goog.proto2.Message, data: any): string;
        
        /**
         * Serializes a message to a string.
         * @param {goog.proto2.Message} message The message to be serialized.
         * @return {string} The serialized form of the message.
         * @override
         */
        serialize(message: goog.proto2.Message): string;
    }

    /**
     * Helper class for parsing the text format.
     * @constructor
     * @final
     */
    export class Parser {
        constructor();
    }
}

declare module goog.proto2.TextFormatSerializer.Tokenizer_ {

    /**
     * An enumeration of all the token types.
     * @enum {*}
     */
    export interface TokenTypes {
        END: any;
        IDENTIFIER: any;
        NUMBER: any;
        COMMENT: any;
        OPEN_BRACE: any;
        CLOSE_BRACE: any;
        OPEN_TAG: any;
        CLOSE_TAG: any;
        OPEN_LIST: any;
        CLOSE_LIST: any;
        STRING: any;
        COLON: any;
        COMMA: any;
        SEMI: any;
        WHITESPACE: any;
    }

    /**
     * @typedef {{type: goog.proto2.TextFormatSerializer.Tokenizer_.TokenTypes,
     *            value: ?string}}
     */
    export interface Token {
        type: goog.proto2.TextFormatSerializer.Tokenizer_.TokenTypes;
        value: string;
    }
}
