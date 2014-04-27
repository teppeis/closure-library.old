declare module goog.net {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     */
    export interface EventType {
        ONLINE: string;
        OFFLINE: string;
    }

    /**
     * Base class for network status information providers.
     * @interface
     * @extends {goog.events.Listenable}
     */
    export interface NetworkStatusMonitor extends goog.events.Listenable {
        
        /**
         * @return {boolean} Whether the system is online or otherwise.
         */
        isOnline(): boolean;
    }
}
