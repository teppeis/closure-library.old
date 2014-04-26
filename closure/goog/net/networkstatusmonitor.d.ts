declare module goog.net {

    /**
     * Base class for network status information providers.
     * @interface
     * @extends {goog.events.Listenable}
     */
    export function NetworkStatusMonitor(): void;
}

declare module goog.net.NetworkStatusMonitor {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     */
    export interface EventType {
        ONLINE: string;
        OFFLINE: string;
    }
}
