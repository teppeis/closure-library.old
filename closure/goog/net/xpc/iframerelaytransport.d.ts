declare module goog.net.xpc {

    /**
     * @typedef {{fragments: !Array.<string>, received: number, expected: number}}
     */
    export interface FragmentInfo {
        fragments: Array<string>;
        received: number;
        expected: number;
    }

    /**
     * Iframe relay transport. Creates hidden iframes containing a document
     * from the peer's origin. Data is transferred in the fragment identifier.
     * Therefore the document loaded in the iframes can be served from the
     * browser's cache.
     *
     * @param {goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for finding
     *     the correct window.
     * @constructor
     * @extends {goog.net.xpc.Transport}
     * @final
     */
    export class IframeRelayTransport extends goog.net.xpc.Transport {
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The transport type.
         * @type {number}
         * @override
         */
        transportType: number;
        
        /**
         * Connects this transport.
         * @override
         */
        connect(): void;
        
        /**
         * Handles transport service messages (internal signalling).
         * @param {string} payload The message content.
         * @override
         */
        transportServiceHandler(payload: string): void;
        
        /**
         * Sends a message.
         *
         * @param {string} service Name of service this the message has to be delivered.
         * @param {string} payload The message content.
         * @override
         */
        send(service: string, payload: string): void;
        
        /** @override */
        disposeInternal(): void;
    }
}
