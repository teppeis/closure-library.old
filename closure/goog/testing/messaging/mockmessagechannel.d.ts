declare module goog.testing.messaging {

    /**
     * Class for unit-testing code that communicates over a MessageChannel.
     * @param {goog.testing.MockControl} mockControl The mock control used to create
     *   the method mock for #send.
     * @extends {goog.messaging.AbstractChannel}
     * @constructor
     * @final
     */
    export class MockMessageChannel extends goog.messaging.AbstractChannel {
        constructor(mockControl: goog.testing.MockControl);
        
        /**
         * A mock send function. Actually an instance of
         * {@link goog.testing.FunctionMock}.
         * @param {string} serviceName The name of the remote service to run.
         * @param {string|!Object} payload The payload to send to the remote page.
         * @override
         */
        send(serviceName: string, payload: string): void;
        
        /**
         * Sets a flag indicating that this is disposed.
         * @override
         */
        dispose(): void;
        
        /**
         * Mocks the receipt of a message. Passes the payload the appropriate service.
         * @param {string} serviceName The service to run.
         * @param {string|!Object} payload The argument to pass to the service.
         */
        receive(serviceName: string, payload: string): void;
    }
}
