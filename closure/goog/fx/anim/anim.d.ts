declare module goog.fx.anim {

    /**
     * Default wait timeout for animations (in milliseconds).  Only used for timed
     * animation, which uses a timer (setTimeout) to schedule animation.
     *
     * @type {number}
     * @const
     */
    export var TIMEOUT: number;

    /**
     * An interface for programatically animated objects. I.e. rendered in
     * javascript frame by frame.
     *
     * @interface
     */
    export function Animated(): void;

    /**
     * Registers an animation to be cycled on the global timer.
     * @param {goog.fx.anim.Animated} animation The animation to register.
     */
    export function registerAnimation(animation: goog.fx.anim.Animated): void;

    /**
     * Removes an animation from the list of animations which are cycled on the
     * global timer.
     * @param {goog.fx.anim.Animated} animation The animation to unregister.
     */
    export function unregisterAnimation(animation: goog.fx.anim.Animated): void;

    /**
     * Tears down this module. Useful for testing.
     */
    export function tearDown(): void;

    /**
     * Registers an animation window. This allows usage of the timing control API
     * for animations. Note that this window must be visible, as non-visible
     * windows can potentially stop animating. This window does not necessarily
     * need to be the window inside which animation occurs, but must remain visible.
     * See: https://developer.mozilla.org/en/DOM/window.mozRequestAnimationFrame.
     *
     * @param {Window} animationWindow The window in which to animate elements.
     */
    export function setAnimationWindow(animationWindow: Window): void;
}
