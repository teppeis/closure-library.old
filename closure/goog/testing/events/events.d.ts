declare module goog.testing.events {

    /**
     * goog.events.BrowserEvent expects an Event so we provide one for JSCompiler.
     *
     * This clones a lot of the functionality of goog.events.Event. This used to
     * use a mixin, but the mixin results in confusing the two types when compiled.
     *
     * @param {string} type Event Type.
     * @param {Object=} opt_target Reference to the object that is the target of
     *     this event.
     * @constructor
     * @extends {Event}
     */
    export class Event extends Event {
        constructor(type: string, opt_target?: Object);
        
        /**
         * Whether to cancel the event in internal capture/bubble processing for IE.
         * @type {boolean}
         * @public
         * @suppress {underscore|visibility} Technically public, but referencing this
         *     outside this package is strongly discouraged.
         */
        propagationStopped_: boolean;
        
        /** @override */
        defaultPrevented: any;
        
        /**
         * Return value for in internal capture/bubble processing for IE.
         * @type {boolean}
         * @public
         * @suppress {underscore|visibility} Technically public, but referencing this
         *     outside this package is strongly discouraged.
         */
        returnValue_: boolean;
        
        /** @override */
        stopPropagation(): void;
        
        /** @override */
        preventDefault(): void;
    }

    /**
     * Simulates a mousedown, mouseup, and then click on the given event target,
     * with the left mouse button.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    export function fireClickSequence(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates the sequence of events fired by the browser when the user double-
     * clicks the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    export function fireDoubleClickSequence(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a complete keystroke (keydown, keypress, and keyup). Note that
     * if preventDefault is called on the keydown, the keypress will not fire.
     *
     * @param {EventTarget} target The target for the event.
     * @param {number} keyCode The keycode of the key pressed.
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    export function fireKeySequence(target: EventTarget, keyCode: number, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a complete keystroke (keydown, keypress, and keyup) when typing
     * a non-ASCII character. Same as fireKeySequence, the keypress will not fire
     * if preventDefault is called on the keydown.
     *
     * @param {EventTarget} target The target for the event.
     * @param {number} keyCode The keycode of the keydown and keyup events.
     * @param {number} keyPressKeyCode The keycode of the keypress event.
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    export function fireNonAsciiKeySequence(target: EventTarget, keyCode: number, keyPressKeyCode: number, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a mouseover event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {EventTarget} relatedTarget The related target for the event (e.g.,
     *     the node that the mouse is being moved out of).
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireMouseOverEvent(target: EventTarget, relatedTarget: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mousemove event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireMouseMoveEvent(target: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mouseout event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {EventTarget} relatedTarget The related target for the event (e.g.,
     *     the node that the mouse is being moved into).
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireMouseOutEvent(target: EventTarget, relatedTarget: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mousedown event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireMouseDownEvent(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a mouseup event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireMouseUpEvent(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a click event on the given target. IE only supports click with
     * the left mouse button.
     * @param {EventTarget} target The target for the event.
     * @param {goog.events.BrowserEvent.MouseButton=} opt_button Mouse button;
     *     defaults to {@code goog.events.BrowserEvent.MouseButton.LEFT}.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireClickEvent(target: EventTarget, opt_button?: goog.events.BrowserEvent.MouseButton, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a double-click event on the given target. Always double-clicks
     * with the left mouse button since no browser supports double-clicking with
     * any other buttons.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireDoubleClickEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a contextmenu event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireContextMenuEvent(target: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a mousedown, contextmenu, and the mouseup on the given event
     * target, with the right mouse button.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Mouse position. Defaults to event's
     * target's position (if available), otherwise (0, 0).
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    export function fireContextMenuSequence(target: EventTarget, opt_coords?: goog.math.Coordinate): boolean;

    /**
     * Simulates a popstate event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {Object} state History state object.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function firePopStateEvent(target: EventTarget, state: Object): boolean;

    /**
     * Simulate a blur event on the given target.
     * @param {EventTarget} target The target for the event.
     * @return {boolean} The value returned by firing the blur browser event,
     *      which returns false iff 'preventDefault' was invoked.
     */
    export function fireBlurEvent(target: EventTarget): boolean;

    /**
     * Simulate a focus event on the given target.
     * @param {EventTarget} target The target for the event.
     * @return {boolean} The value returned by firing the focus browser event,
     *     which returns false iff 'preventDefault' was invoked.
     */
    export function fireFocusEvent(target: EventTarget): boolean;

    /**
     * Simulates an event's capturing and bubbling phases.
     * @param {Event} event A simulated native event. It will be wrapped in a
     *     normalized BrowserEvent and dispatched to Closure listeners on all
     *     ancestors of its target (inclusive).
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireBrowserEvent(event: Event): boolean;

    /**
     * Simulates a touchstart event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event's
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireTouchStartEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a touchmove event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event's
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireTouchMoveEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a touchend event on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event's
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the event: false if preventDefault() was
     *     called on it, true otherwise.
     */
    export function fireTouchEndEvent(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Simulates a simple touch sequence on the given target.
     * @param {EventTarget} target The target for the event.
     * @param {goog.math.Coordinate=} opt_coords Touch position. Defaults to event
     *     target's position (if available), otherwise (0, 0).
     * @param {Object=} opt_eventProperties Event properties to be mixed into the
     *     BrowserEvent.
     * @return {boolean} The returnValue of the sequence: false if preventDefault()
     *     was called on any of the events, true otherwise.
     */
    export function fireTouchSequence(target: EventTarget, opt_coords?: goog.math.Coordinate, opt_eventProperties?: Object): boolean;

    /**
     * Mixins a listenable into the given object. This turns the object
     * into a goog.events.Listenable. This is useful, for example, when
     * you need to mock a implementation of listenable and still want it
     * to work with goog.events.
     * @param {!Object} obj The object to mixin into.
     */
    export function mixinListenable(obj: Object): void;
}
