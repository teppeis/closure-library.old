declare module goog.net {

    /**
     * A WebChannel represents a logical bi-directional channel over which the
     * client communicates with a remote server that holds the other endpoint
     * of the channel. A WebChannel is always created in the context of a shared
     * {@link WebChannelTransport} instance. It is up to the underlying client-side
     * and server-side implementations to decide how or when multiplexing is
     * to be enabled.
     *
     * @interface
     * @extends {EventTarget}
     */
    export function WebChannel(): void;
}

declare module goog.net.WebChannel {

    /**
     * Common events fired by WebChannels.
     * @enum {string}
     */
    export interface EventType {
        OPEN: string;
        CLOSE: string;
        ERROR: string;
        MESSAGE: string;
    }

    /**
     * WebChannel level error conditions.
     * @enum {number}
     */
    export interface ErrorStatus {
        OK: number;
        NETWORK_ERROR: number;
        SERVER_ERROR: number;
    }

    /**
     * Configuration spec for newly created WebChannel instances.
     *
     * WebChannels are configured in the context of the containing
     * {@link WebChannelTransport}. The configuration parameters are specified
     * when a new instance of WebChannel is created via {@link WebChannelTransport}.
     *
     * messageHeaders: custom headers to be added to every message sent to the
     * server.
     *
     * messageUrlParams: custom url query parameters to be added to every message
     * sent to the server.
     *
     * spdyRequestLimit: the maximum number of in-flight HTTP requests allowed
     * when SPDY is enabled. Currently we only detect SPDY in Chrome.
     * This parameter defaults to 10. When SPDY is not enabled, this parameter
     * will have no effect.
     *
     * supportsCrossDomainXhr: setting this to true to allow the use of sub-domains
     * (as configured by the server) to send XHRs with the CORS withCredentials
     * bit set to true.
     *
     * testUrl: the test URL for detecting connectivity during the initial
     * handshake. This parameter defaults to "/<channel_url>/test".
     *
     *
     * @typedef {{
     *   messageHeaders: (!Object.<string, string>|undefined),
     *   messageUrlParams: (!Object.<string, string>|undefined),
     *   spdyRequestLimit: (number|undefined),
     *   supportsCrossDomainXhr: (boolean|undefined),
     *   testUrl: (string|undefined)
     * }}
     */
    export interface Options {
        messageHeaders: Object;
        messageUrlParams: Object;
        spdyRequestLimit: number;
        supportsCrossDomainXhr: boolean;
        testUrl: string;
    }

    /**
     * Types that are allowed as message data.
     *
     * @typedef {(ArrayBuffer|Blob|Object.<string, string>|Array)}
     */
    export interface MessageData {
    }

    /**
     * The event interface for the MESSAGE event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    export class MessageEvent extends goog.events.Event {
        constructor();
        
        /**
         * The content of the message received from the server.
         *
         * @type {!goog.net.WebChannel.MessageData}
         */
        data: goog.net.WebChannel.MessageData;
    }

    /**
     * The event interface for the ERROR event.
     *
     * @constructor
     * @extends {goog.events.Event}
     */
    export class ErrorEvent extends goog.events.Event {
        constructor();
        
        /**
         * The error status.
         *
         * @type {!goog.net.WebChannel.ErrorStatus}
         */
        status: goog.net.WebChannel.ErrorStatus;
    }

    /**
     * The readonly runtime properties of the WebChannel instance.
     *
     * This class is defined for debugging and monitoring purposes, and for
     * optimization functions that the application may choose to manage by itself.
     *
     * @interface
     */
    export function RuntimeProperties(): void;
}
