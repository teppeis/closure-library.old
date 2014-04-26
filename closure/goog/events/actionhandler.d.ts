declare module goog.events {

    /**
     * Enum type for the events fired by the action handler
     * @enum {string}
     */
    export interface EventType {
        ACTION: string;
        BEFOREACTION: string;
    }

    /**
     * A wrapper around an element that you want to listen to ACTION events on.
     * @param {Element|Document} element The element or document to listen on.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class ActionHandler extends goog.events.EventTarget {
        constructor(element: Element);
        
        /** @override */
        disposeInternal(): void;
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.ACTION event.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    export class ActionEvent extends goog.events.BrowserEvent {
        constructor(browserEvent: goog.events.BrowserEvent);
    }

    /**
     * This class is used for the goog.events.ActionHandler.EventType.BEFOREACTION
     * event. BEFOREACTION gives a chance to the application so the keyboard focus
     * can be restored back, if required.
     * @param {!goog.events.BrowserEvent} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    export class BeforeActionEvent extends goog.events.BrowserEvent {
        constructor(browserEvent: goog.events.BrowserEvent);
    }
}
