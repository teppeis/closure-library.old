declare module goog.result {

    /**
     * A Result object represents a value returned by an asynchronous
     * operation at some point in the future (e.g. a network fetch). This is akin
     * to a 'Promise' or a 'Future' in other languages and frameworks.
     *
     * @interface
     * @extends {goog.Thenable}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    export function Result(): void;
}

declare module goog.result.Result {

    /**
     * The States this object can be in.
     *
     * @enum {string}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    export interface State {
        SUCCESS: string;
        ERROR: string;
        PENDING: string;
    }

    /**
     * The value to be passed to the error handlers invoked upon cancellation.
     * @constructor
     * @extends {Error}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    export class CancelError extends Error {
        constructor();
    }
}
