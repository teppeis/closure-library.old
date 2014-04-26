declare module goog.messaging {

    /**
     * Creates a new DeferredChannel, which wraps a deferred MessageChannel and
     * enqueues messages to be sent once the wrapped channel is resolved.
     *
     * @param {!goog.async.Deferred} deferredChannel The underlying deferred
     *     MessageChannel.
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.messaging.MessageChannel}
     * @final
     */
    export class DeferredChannel extends goog.Disposable {
        constructor(deferredChannel: goog.async.Deferred);
        
        /**
         * Cancels the wrapped Deferred.
         */
        cancel(): void;
        
        /** @override */
        connect(): void;
        
        /** @override */
        isConnected(): void;
        
        /** @override */
        registerService(): void;
        
        /** @override */
        registerDefaultService(): void;
        
        /** @override */
        send(): void;
        
        /** @override */
        disposeInternal(): void;
    }
}
