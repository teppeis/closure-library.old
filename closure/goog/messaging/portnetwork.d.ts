declare module goog.messaging {

    /**
     * @interface
     */
    export function PortNetwork(): void;
}

declare module goog.messaging.PortNetwork {

    /**
     * The name of the service exported by the operator for creating a connection
     * between two callers.
     *
     * @type {string}
     * @const
     */
    export var REQUEST_CONNECTION_SERVICE: string;

    /**
     * The name of the service exported by the callers for adding a connection to
     * another context.
     *
     * @type {string}
     * @const
     */
    export var GRANT_CONNECTION_SERVICE: string;
}
