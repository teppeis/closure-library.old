declare module goog.fx {

    /**
     * Events fired by the animation.
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
        ANIMATE: string;
        DESTROY: string;
    }

    /**
     * Enum for the possible states of an animation.
     * @deprecated Use goog.fx.Transition.State instead.
     * @enum {number}
     */
    export interface State extends goog.fx.TransitionBase.State {}

    /**
     * Constructor for an animation object.
     * @param {Array.<number>} start Array for start coordinates.
     * @param {Array.<number>} end Array for end coordinates.
     * @param {number} duration Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @constructor
     * @implements {goog.fx.anim.Animated}
     * @implements {goog.fx.Transition}
     * @extends {goog.fx.TransitionBase}
     */
    export class Animation extends goog.fx.TransitionBase {
        constructor(start: Array<number>, end: Array<number>, duration: number, opt_acc?: Function);
        
        /**
         * @deprecated Use goog.fx.anim.TIMEOUT.
         */
        static TIMEOUT: any;
        
        /**
         * Percent of the way through the animation.
         * @type {number}
         * @protected
         */
        progress: number;
        
        /**
         * Timestamp for when last frame was run.
         * @type {?number}
         * @protected
         */
        lastFrame: number;
        
        /**
         * Sets whether the animation should use "right" rather than "left" to position
         * elements.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point "right" will be
         * used for RTL elements by default.
         * @param {boolean} useRightPositioningForRtl True if "right" should be used for
         *     positioning, false if "left" should be used for positioning.
         */
        enableRightPositioningForRtl(useRightPositioningForRtl: boolean): void;
        
        /**
         * Whether the animation should use "right" rather than "left" to position
         * elements.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point "right" will be
         * used for RTL elements by default.
         * @return {boolean} True if "right" should be used for positioning, false if
         *     "left" should be used for positioning.
         */
        isRightPositioningForRtlEnabled(): boolean;
        
        /**
         * @deprecated Use goog.fx.anim.setAnimationWindow.
         * @param {Window} animationWindow The window in which to animate elements.
         */
        static setAnimationWindow(animationWindow: Window): void;
        
        /**
         * Starts or resumes an animation.
         * @param {boolean=} opt_restart Whether to restart the
         *     animation from the beginning if it has been paused.
         * @return {boolean} Whether animation was started.
         * @override
         */
        play(opt_restart?: boolean): boolean;
        
        /**
         * Stops the animation.
         * @param {boolean=} opt_gotoEnd If true the animation will move to the
         *     end coords.
         * @override
         */
        stop(opt_gotoEnd?: boolean): void;
        
        /**
         * Pauses the animation (iff it's playing).
         * @override
         */
        pause(): void;
        
        /**
         * @return {number} The current progress of the animation, the number
         *     is between 0 and 1 inclusive.
         */
        getProgress(): number;
        
        /**
         * Sets the progress of the animation.
         * @param {number} progress The new progress of the animation.
         */
        setProgress(progress: number): void;
        
        /**
         * Disposes of the animation.  Stops an animation, fires a 'destroy' event and
         * then removes all the event handlers to clean up memory.
         * @override
         * @protected
         */
        disposeInternal(): void;
        
        /**
         * Stops an animation, fires a 'destroy' event and then removes all the event
         * handlers to clean up memory.
         * @deprecated Use dispose() instead.
         */
        destroy(): void;
        
        /**
         * Handles the actual iteration of the animation in a timeout
         * @param {number} now The current time.
         */
        cycle(now: number): void;
        
        /**
         * Dispatches the ANIMATE event. Sub classes should override this instead
         * of listening to the event.
         * @protected
         */
        onAnimate(): void;
        
        /**
         * Dispatches the DESTROY event. Sub classes should override this instead
         * of listening to the event.
         * @protected
         */
        onDestroy(): void;
    }

    /**
     * Class for an animation event object.
     * @param {string} type Event type.
     * @param {goog.fx.Animation} anim An animation object.
     * @constructor
     * @extends {goog.events.Event}
     */
    export class AnimationEvent extends goog.events.Event {
        constructor(type: string, anim: goog.fx.Animation);
        
        /**
         * Returns the coordinates as integers (rounded to nearest integer).
         * @return {Array.<number>} An array of the coordinates rounded to
         *     the nearest integer.
         */
        coordsAsInts(): Array<number>;
    }
}
