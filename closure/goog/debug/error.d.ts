declare module goog.debug {

    /**
     * Base class for custom error objects.
     * @param {*=} opt_msg The message associated with the error.
     * @constructor
     * @extends {Error}
     */
    export class Error extends Error {
        constructor(opt_msg?: any);
    }
}
