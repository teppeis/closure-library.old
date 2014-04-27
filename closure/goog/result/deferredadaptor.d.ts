declare module goog.result {

    /**
     * An adaptor from Result to a Deferred, for use with existing Deferred chains.
     *
     * @param {!goog.result.Result} result A result.
     * @constructor
     * @extends {goog.async.Deferred}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    export class DeferredAdaptor extends goog.async.Deferred<any> {
        constructor(result: goog.result.Result);
    }
}
