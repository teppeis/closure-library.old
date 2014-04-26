declare module goog.testing.proto2 {

    /**
     * Compares two goog.proto2.Message objects. Gives more readable output than
     * assertObjectEquals on mismatch.
     * @param {!goog.proto2.Message} expected Expected proto2 message.
     * @param {!goog.proto2.Message} actual Actual proto2 message.
     * @param {string=} opt_failureMessage Failure message when the values don't
     *     match.
     */
    export function assertEquals(expected: goog.proto2.Message, actual: goog.proto2.Message, opt_failureMessage?: string): void;

    /**
     * Helper function to quickly build protocol buffer messages from JSON objects.
     * @param {function(new:MessageType)} messageCtor A constructor that
     *     creates a {@code goog.proto2.Message} subclass instance.
     * @param {!Object} json JSON object which uses field names as keys.
     * @return {!MessageType} The deserialized protocol buffer.
     * @template MessageType
     */
    export function fromObject<MessageType>(messageCtor: () => any, json: Object): MessageType;
}
