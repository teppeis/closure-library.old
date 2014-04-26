declare module goog.events {

    /**
     * @enum {number} Different capture simulation mode for IE8-.
     */
    export interface CaptureSimulationMode {
        OFF_AND_FAIL: number;
        OFF_AND_SILENT: number;
        ON: number;
    }

    /**
     * @typedef {number|goog.events.ListenableKey}
     */
    export interface Key {
    }

    /**
     * @typedef {EventTarget|goog.events.Listenable}
     */
    export interface ListenableType {
    }

    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. A listener can only be added once
     * to an object and if it is added again the key for the listener is
     * returned. Note that if the existing listener is a one-off listener
     * (registered via listenOnce), it will no longer be a one-off
     * listener after a call to listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array.<string>|
     *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method, or an object with a handleEvent function.
     *     WARNING: passing an Object is now softly deprecated.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    export function listen<T, EVENTOBJ>(src: EventTarget, type: string, listener: (arg0: EVENTOBJ) => any, opt_capt?: boolean, opt_handler?: T): goog.events.Key;

    /**
     * Helper function for returning a proxy function.
     * @return {!Function} A new or reused function object.
     */
    export function getProxy(): Function;

    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. After the event has fired the event
     * listener is removed from the target.
     *
     * If an existing listener already exists, listenOnce will do
     * nothing. In particular, if the listener was previously registered
     * via listen(), listenOnce() will not turn the listener into a
     * one-off listener. Similarly, if there is already an existing
     * one-off listener, listenOnce does not modify the listeners (it is
     * still a once listener).
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array.<string>|
     *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method.
     * @param {boolean=} opt_capt Fire in capture phase?.
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    export function listenOnce<T, EVENTOBJ>(src: EventTarget, type: string, listener: (arg0: EVENTOBJ) => any, opt_capt?: boolean, opt_handler?: T): goog.events.Key;

    /**
     * Adds an event listener with a specific event wrapper on a DOM Node or an
     * object that has implemented {@link goog.events.Listenable}. A listener can
     * only be added once to an object.
     *
     * @param {EventTarget|goog.events.Listenable} src The target to
     *     listen to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(this:T, ?):?|{handleEvent:function(?):?}|null} listener
     *     Callback method, or an object with a handleEvent function.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @template T
     */
    export function listenWithWrapper<T>(src: EventTarget, wrapper: goog.events.EventWrapper, listener: (arg0: any) => any, opt_capt?: boolean, opt_handler?: T): void;

    /**
     * Removes an event listener which was added with listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {string|Array.<string>|
     *     !goog.events.EventId.<EVENTOBJ>|!Array.<!goog.events.EventId.<EVENTOBJ>>}
     *     type Event type or array of event types to unlisten to.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {?boolean} indicating whether the listener was there to remove.
     * @template EVENTOBJ
     */
    export function unlisten<EVENTOBJ>(src: EventTarget, type: string, listener: (arg0: any) => any, opt_capt?: boolean, opt_handler?: Object): boolean;

    /**
     * Removes an event listener which was added with listen() by the key
     * returned by listen().
     *
     * @param {goog.events.Key} key The key returned by listen() for this
     *     event listener.
     * @return {boolean} indicating whether the listener was there to remove.
     */
    export function unlistenByKey(key: goog.events.Key): boolean;

    /**
     * Removes an event listener which was added with listenWithWrapper().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     */
    export function unlistenWithWrapper(src: EventTarget, wrapper: goog.events.EventWrapper, listener: (arg0: any) => any, opt_capt?: boolean, opt_handler?: Object): void;

    /**
     * Removes all listeners from an object. You can also optionally
     * remove listeners of a particular type.
     *
     * @param {Object=} opt_obj Object to remove listeners from. Not
     *     specifying opt_obj is now DEPRECATED (it used to remove all
     *     registered listeners).
     * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
     *     Default is all types.
     * @return {number} Number of listeners removed.
     */
    export function removeAll(opt_obj?: Object, opt_type?: string): number;

    /**
     * Removes all native listeners registered via goog.events. Native
     * listeners are listeners on native browser objects (such as DOM
     * elements). In particular, goog.events.Listenable and
     * goog.events.EventTarget listeners will NOT be removed.
     * @return {number} Number of listeners removed.
     * @deprecated This doesn't do anything, now that Closure no longer
     * stores a central listener registry.
     */
    export function removeAllNativeListeners(): number;

    /**
     * Gets the listeners for a given object, type and capture phase.
     *
     * @param {Object} obj Object to get listeners for.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Capture phase?.
     * @return {Array.<goog.events.Listener>} Array of listener objects.
     */
    export function getListeners(obj: Object, type: string, capture: boolean): Array<goog.events.Listener>;

    /**
     * Gets the goog.events.Listener for the event or null if no such listener is
     * in use.
     *
     * @param {EventTarget|goog.events.Listenable} src The target from
     *     which to get listeners.
     * @param {?string|!goog.events.EventId.<EVENTOBJ>} type The type of the event.
     * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to get.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *                            whether the listener is fired during the
     *                            capture or bubble phase of the event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.ListenableKey} the found listener or null if not found.
     * @template EVENTOBJ
     */
    export function getListener<EVENTOBJ>(src: EventTarget, type: string, listener: (arg0: EVENTOBJ) => any, opt_capt?: boolean, opt_handler?: Object): goog.events.ListenableKey;

    /**
     * Returns whether an event target has any active listeners matching the
     * specified signature. If either the type or capture parameters are
     * unspecified, the function will match on the remaining criteria.
     *
     * @param {EventTarget|goog.events.Listenable} obj Target to get
     *     listeners for.
     * @param {string|!goog.events.EventId=} opt_type Event type.
     * @param {boolean=} opt_capture Whether to check for capture or bubble-phase
     *     listeners.
     * @return {boolean} Whether an event target has one or more listeners matching
     *     the requested type and/or capture phase.
     */
    export function hasListener(obj: EventTarget, opt_type?: string, opt_capture?: boolean): boolean;

    /**
     * Provides a nice string showing the normalized event objects public members
     * @param {Object} e Event Object.
     * @return {string} String of the public members of the normalized event object.
     */
    export function expose(e: Object): string;

    /**
     * Fires an object's listeners of a particular type and phase
     *
     * @param {Object} obj Object whose listeners to call.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Which event phase.
     * @param {Object} eventObject Event object to be passed to listener.
     * @return {boolean} True if all listeners returned true else false.
     */
    export function fireListeners(obj: Object, type: string, capture: boolean, eventObject: Object): boolean;

    /**
     * Fires a listener with a set of arguments
     *
     * @param {goog.events.Listener} listener The listener object to call.
     * @param {Object} eventObject The event object to pass to the listener.
     * @return {boolean} Result of listener.
     */
    export function fireListener(listener: goog.events.Listener, eventObject: Object): boolean;

    /**
     * Gets the total number of listeners currently in the system.
     * @return {number} Number of listeners.
     * @deprecated This returns estimated count, now that Closure no longer
     * stores a central listener registry. We still return an estimation
     * to keep existing listener-related tests passing. In the near future,
     * this function will be removed.
     */
    export function getTotalListenerCount(): number;

    /**
     * Dispatches an event (or event like object) and calls all listeners
     * listening for events of this type. The type of the event is decided by the
     * type property on the event object.
     *
     * If any of the listeners returns false OR calls preventDefault then this
     * function will return false.  If one of the capture listeners calls
     * stopPropagation, then the bubble listeners won't fire.
     *
     * @param {goog.events.Listenable} src The event target.
     * @param {goog.events.EventLike} e Event object.
     * @return {boolean} If anyone called preventDefault on the event object (or
     *     if any of the handlers returns false) this will also return false.
     *     If there are no handlers, or if all handlers return true, this returns
     *     true.
     */
    export function dispatchEvent(src: goog.events.Listenable, e: goog.events.EventLike): boolean;

    /**
     * Installs exception protection for the browser event entry point using the
     * given error handler.
     *
     * @param {goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry point.
     */
    export function protectBrowserEventEntryPoint(errorHandler: goog.debug.ErrorHandler): void;

    /**
     * Handles an event and dispatches it to the correct listeners. This
     * function is a proxy for the real listener the user specified.
     *
     * @param {goog.events.Listener} listener The listener object.
     * @param {Event=} opt_evt Optional event object that gets passed in via the
     *     native event handlers.
     * @return {boolean} Result of the event handler.
     * @this {EventTarget} The object or Element that fired the event.
     * @private
     */
    export function handleBrowserEvent_(listener: goog.events.Listener, opt_evt?: Event): boolean;

    /**
     * Creates a unique event id.
     *
     * @param {string} identifier The identifier.
     * @return {string} A unique identifier.
     * @idGenerator
     */
    export function getUniqueId(identifier: string): string;

    /**
     * @param {Object|Function} listener The listener function or an
     *     object that contains handleEvent method.
     * @return {!Function} Either the original function or a function that
     *     calls obj.handleEvent. If the same listener is passed to this
     *     function more than once, the same function is guaranteed to be
     *     returned.
     */
    export function wrapListener(listener: Object): Function;
}
