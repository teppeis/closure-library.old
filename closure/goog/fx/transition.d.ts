declare module goog.fx {

    /**
     * Transition event types.
     * @enum {string}
     */
    export interface EventType {
        PLAY: string;
        BEGIN: string;
        RESUME: string;
        END: string;
        STOP: string;
        FINISH: string;
        PAUSE: string;
    }

    /**
     * An interface for programmatic transition. Must extend
     * {@code goog.events.EventTarget}.
     * @interface
     */
    export interface Transition {
        
        /**
         * Plays the transition.
         */
        play(): void;
        
        /**
         * Stops the transition.
         */
        stop(): void;
    }
}
