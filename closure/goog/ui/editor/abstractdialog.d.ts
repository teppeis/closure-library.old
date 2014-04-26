declare module goog.ui.editor {

    /**
     * Event type constants for events the dialog fires.
     * @enum {string}
     */
    export interface EventType {
        AFTER_HIDE: string;
        CANCEL: string;
        OK: string;
    }

    /**
     * Creates an object that represents a dialog box.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     * dialog's dom structure.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    export class AbstractDialog extends goog.events.EventTarget {
        constructor(domHelper: goog.dom.DomHelper);
        
        /**
         * The DOM helper for the parent document.
         * @type {goog.dom.DomHelper}
         * @protected
         */
        dom: goog.dom.DomHelper;
        
        /**
         * Causes the dialog box to appear, centered on the screen. Lazily creates the
         * dialog if needed.
         */
        show(): void;
        
        /**
         * Hides the dialog, causing AFTER_HIDE to fire.
         */
        hide(): void;
        
        /**
         * @return {boolean} Whether the dialog is open.
         */
        isOpen(): boolean;
        
        /**
         * Runs the handler registered on the OK button event and closes the dialog if
         * that handler succeeds.
         * This is useful in cases such as double-clicking an item in the dialog is
         * equivalent to selecting it and clicking the default button.
         * @protected
         */
        processOkAndClose(): void;
        
        /**
         * Creates and returns the goog.ui.Dialog control that is being wrapped
         * by this object.
         * @return {goog.ui.Dialog} Created Dialog control.
         * @protected
         */
        createDialogControl(): goog.ui.Dialog;
        
        /**
         * Returns the HTML Button element for the OK button in this dialog.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getOkButtonElement(): Element;
        
        /**
         * Returns the HTML Button element for the Cancel button in this dialog.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getCancelButtonElement(): Element;
        
        /**
         * Returns the HTML Button element for the button added to this dialog with
         * the given button id.
         * @param {string} buttonId The id of the button to get.
         * @return {Element} The button element if found, else null.
         * @protected
         */
        getButtonElement(buttonId: string): Element;
        
        /**
         * Creates and returns the event object to be used when dispatching the OK
         * event to listeners, or returns null to prevent the dialog from closing.
         * Subclasses should override this to return their own subclass of
         * goog.events.Event that includes all data a plugin would need from the dialog.
         * @param {goog.events.Event} e The event object dispatched by the wrapped
         *     dialog.
         * @return {goog.events.Event} The event object to be used when dispatching the
         *     OK event to listeners.
         * @protected
         */
        createOkEvent(e: goog.events.Event): goog.events.Event;
        
        /**
         * Handles the event dispatched by the wrapped dialog control when the user
         * clicks the OK button. Attempts to create the OK event object and dispatches
         * it if successful.
         * @param {goog.ui.Dialog.Event} e wrapped dialog OK event object.
         * @return {boolean} Whether the default action (closing the dialog) should
         *     still be executed. This will be false if the OK event could not be
         *     created to be dispatched, or if any listener to that event returs false
         *     or calls preventDefault.
         * @protected
         */
        handleOk(e: goog.ui.Dialog.Event): boolean;
        
        /**
         * Handles the event dispatched by the wrapped dialog control when the user
         * clicks the Cancel button. Simply dispatches a CANCEL event.
         * @return {boolean} Returns false if any of the handlers called prefentDefault
         *     on the event or returned false themselves.
         * @protected
         */
        handleCancel(): boolean;
        
        /**
         * Disposes of the dialog. If the dialog is open, it will be hidden and
         * AFTER_HIDE will be dispatched.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }

    /**
     * A builder class for the dialog control. All methods except build return this.
     * @param {goog.ui.editor.AbstractDialog} editorDialog Editor dialog object
     *     that will wrap the wrapped dialog object this builder will create.
     * @constructor
     */
    export class Builder {
        constructor(editorDialog: goog.ui.editor.AbstractDialog);
    }
}
