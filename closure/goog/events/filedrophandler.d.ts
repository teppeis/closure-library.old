declare module goog.events {

    /**
     * A files drag and drop event detector. Gets an {@code element} as parameter
     * and fires {@code goog.events.FileDropHandler.EventType.DROP} event when files
     * are dropped in the {@code element}.
     *
     * @param {Element|Document} element The element or document to listen on.
     * @param {boolean=} opt_preventDropOutside Whether to prevent a drop on the
     *     area outside the {@code element}. Default false.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class FileDropHandler extends goog.events.EventTarget {
        constructor(element: Element, opt_preventDropOutside?: boolean);
    }
}

declare module goog.events.FileDropHandler {

    /**
     * The types of events fired by this class.
     * @enum {string}
     */
    export interface EventType {
        DROP: string;
    }
}
