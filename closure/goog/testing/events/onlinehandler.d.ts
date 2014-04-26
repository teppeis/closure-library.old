declare module goog.testing.events {

    /**
     * NetworkStatusMonitor test double.
     * @param {boolean} initialState The initial online state of the mock.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.net.NetworkStatusMonitor}
     * @final
     */
    export class OnlineHandler extends goog.events.EventTarget {
        constructor(initialState: boolean);
        
        /** @override */
        isOnline(): void;
        
        /**
         * Sets the online state.
         * @param {boolean} newOnlineState The new online state.
         */
        setOnline(newOnlineState: boolean): void;
    }
}
