declare module goog.debug.Trace_ {

    /**
     * Event type supported by tracer
     * @enum {number}
     */
    export interface EventType {
        START: number;
        STOP: number;
        COMMENT: number;
    }

    /**
     * Returns the current time. Done through a wrapper function so it can be
     * overridden by application code. Gmail has an ActiveX extension that provides
     * higher precision timing info.
     * @return {number} The current time in milliseconds.
     */
    export function now(): number;
}

declare module goog.debug {

    /**
     * Singleton trace object
     * @type {goog.debug.Trace_}
     */
    export var Trace: goog.debug.Trace_;
}
