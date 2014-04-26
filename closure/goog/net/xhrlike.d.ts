declare module goog.net {

    /**
     * Interface for the common parts of XMLHttpRequest.
     *
     * Mostly copied from externs/w3c_xml.js.
     *
     * @interface
     * @see http://www.w3.org/TR/XMLHttpRequest/
     */
    export function XhrLike(): void;
}

declare module goog.net.XhrLike {

    /**
     * Typedef that refers to either native or custom-implemented XHR objects.
     * @typedef {!goog.net.XhrLike|!XMLHttpRequest}
     */
    export interface OrNative {
    }
}
