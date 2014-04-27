declare module goog.async {

    /**
     * A Delay object invokes the associated function after a specified delay. The
     * interval duration can be specified once in the constructor, or can be defined
     * each time the delay is started. Calling start on an active delay will reset
     * the timer.
     *
     * @param {Function} listener Function to call when the delay completes.
     * @param {number=} opt_interval The default length of the invocation delay (in
     *     milliseconds).
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    export class Delay extends goog.Disposable {
        constructor(listener: Function, opt_interval?: number, opt_handler?: Object);
        
        /**
         * Starts the delay timer. The provided listener function will be called after
         * the specified interval. Calling start on an active timer will reset the
         * delay interval.
         * @param {number=} opt_interval If specified, overrides the object's default
         *     interval with this one (in milliseconds).
         */
        start(opt_interval?: number): void;
        
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
        
        /**
         * Fires delay's action even if timer has already gone off or has not been
         * started yet; guarantees action firing. Stops the delay timer.
         */
        fire(): void;
        
        /**
         * Fires delay's action only if timer is currently active. Stops the delay
         * timer.
         */
        fireIfActive(): void;
        
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    }
}

declare module goog {

    /**
     * A deprecated alias.
     * @deprecated Use goog.async.Delay instead.
     * @constructor
     * @final
     */
    export class Delay {
        constructor();
    }
}
