declare module goog.testing.watchers {

    /**
     * Fires clock reset watching functions.
     */
    export function signalClockReset(): void;

    /**
     * Enqueues a function to be called when the clock used for setTimeout is reset.
     * @param {function()} fn
     */
    export function watchClockReset(fn: () => any): void;
}
