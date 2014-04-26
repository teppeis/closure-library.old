declare module goog.ui {

    /**
     * Events dispatched by dialogs.
     * @enum {string}
     */
    export interface EventType {
        SELECT: string;
        AFTER_HIDE: string;
        AFTER_SHOW: string;
    }

    /**
     * The keys used to identify standard buttons in events.
     * @enum {string}
     */
    export interface DefaultButtonKeys {
        OK: string;
        CANCEL: string;
        YES: string;
        NO: string;
        SAVE: string;
        CONTINUE: string;
    }

    /**
     * The default captions for the default buttons.
     * @enum {string}
     */
    export interface DefaultButtonCaptions {
        OK: string;
        CANCEL: string;
        YES: string;
        NO: string;
        SAVE: string;
        CONTINUE: string;
    }

    /**
     * Class for showing simple dialog boxes.
     * The Html structure of the dialog box is:
     * <pre>
     *  Element         Function                Class-name, modal-dialog = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask              modal-dialog-bg
     * - div            Background mask          modal-dialog-bg
     * - div            Dialog area              modal-dialog
     *     - div        Title bar                modal-dialog-title
     *        - span                             modal-dialog-title-text
     *          - text  Title text               N/A
     *        - span                             modal-dialog-title-close
     *          - ??    Close box                N/A
     *     - div        Content area             modal-dialog-content
     *        - ??      User specified content   N/A
     *     - div        Button area              modal-dialog-buttons
     *        - button                           N/A
     *        - button
     *        - ...
     * </pre>
     * @constructor
     * @param {string=} opt_class CSS class name for the dialog element, also used
     *     as a class name prefix for related elements; defaults to modal-dialog.
     *     This should be a single, valid CSS class name.
     * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
     *     issue by using an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *     goog.ui.Component} for semantics.
     * @extends {goog.ui.ModalPopup}
     */
    export class Dialog extends goog.ui.ModalPopup {
        constructor(opt_class?: string, opt_useIframeMask?: boolean, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Event type constant for dialog events.
         * TODO(attila): Change this to goog.ui.Dialog.EventType.SELECT.
         * @type {string}
         * @deprecated Use goog.ui.Dialog.EventType.SELECT.
         */
        static SELECT_EVENT: string;
        
        /**
         * Sets the title.
         * @param {string} title The title text.
         */
        setTitle(title: string): void;
        
        /**
         * Gets the title.
         * @return {string} The title.
         */
        getTitle(): string;
        
        /**
         * Allows arbitrary HTML to be set in the content element.
         * TODO(user): Deprecate in favor of setSafeHtmlContent, once developer docs on
         * using goog.html.SafeHtml are in place.
         * @param {string} html Content HTML.
         */
        setContent(html: string): void;
        
        /**
         * Allows arbitrary HTML to be set in the content element.
         * @param {!goog.html.SafeHtml} html Content HTML.
         */
        setSafeHtmlContent(html: goog.html.SafeHtml): void;
        
        /**
         * Gets the content HTML of the content element as a plain string.
         *
         * Note that this method returns the HTML markup that was previously set via
         * setContent(). In particular, the HTML returned by this method does not
         * reflect any changes to the content element's DOM that were made my means
         * other than setContent().
         *
         * @return {string} Content HTML.
         */
        getContent(): string;
        
        /**
         * Gets the content HTML of the content element.
         * @return {goog.html.SafeHtml} Content HTML.
         */
        getSafeHtmlContent(): goog.html.SafeHtml;
        
        /**
         * Returns the dialog's preferred ARIA role. This can be used to override the
         * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
         * warning or confirmation dialog.
         * @return {goog.a11y.aria.Role} This dialog's preferred ARIA role.
         */
        getPreferredAriaRole(): goog.a11y.aria.Role;
        
        /**
         * Sets the dialog's preferred ARIA role. This can be used to override the
         * default dialog role, e.g. with an ARIA role of ALERTDIALOG for a simple
         * warning or confirmation dialog.
         * @param {goog.a11y.aria.Role} role This dialog's preferred ARIA role.
         */
        setPreferredAriaRole(role: goog.a11y.aria.Role): void;
        
        /**
         * Returns the content element so that more complicated things can be done with
         * the content area.  Renders if the DOM is not yet created.  Overrides
         * {@link goog.ui.Component#getContentElement}.
         * @return {Element} The content element.
         * @override
         */
        getContentElement(): Element;
        
        /**
         * Returns the title element so that more complicated things can be done with
         * the title.  Renders if the DOM is not yet created.
         * @return {Element} The title element.
         */
        getTitleElement(): Element;
        
        /**
         * Returns the title text element so that more complicated things can be done
         * with the text of the title.  Renders if the DOM is not yet created.
         * @return {Element} The title text element.
         */
        getTitleTextElement(): Element;
        
        /**
         * Returns the title close element so that more complicated things can be done
         * with the close area of the title.  Renders if the DOM is not yet created.
         * @return {Element} The close box.
         */
        getTitleCloseElement(): Element;
        
        /**
         * Returns the button element so that more complicated things can be done with
         * the button area.  Renders if the DOM is not yet created.
         * @return {Element} The button container element.
         */
        getButtonElement(): Element;
        
        /**
         * Returns the dialog element so that more complicated things can be done with
         * the dialog box.  Renders if the DOM is not yet created.
         * @return {Element} The dialog element.
         */
        getDialogElement(): Element;
        
        /**
         * Returns the background mask element so that more complicated things can be
         * done with the background region.  Renders if the DOM is not yet created.
         * @return {Element} The background mask element.
         * @override
         */
        getBackgroundElement(): Element;
        
        /**
         * Gets the opacity of the background mask.
         * @return {number} Background mask opacity.
         */
        getBackgroundElementOpacity(): number;
        
        /**
         * Sets the opacity of the background mask.
         * @param {number} opacity Background mask opacity.
         */
        setBackgroundElementOpacity(opacity: number): void;
        
        /**
         * Sets the modal property of the dialog. In case the dialog is already
         * inDocument, renders the modal background elements according to the specified
         * modal parameter.
         *
         * Note that non-modal dialogs cannot use an iframe mask.
         *
         * @param {boolean} modal Whether the dialog is modal.
         */
        setModal(modal: boolean): void;
        
        /**
         * @return {boolean} modal Whether the dialog is modal.
         */
        getModal(): boolean;
        
        /**
         * @return {string} The CSS class name for the dialog element.
         */
        getClass(): string;
        
        /**
         * Sets whether the dialog can be dragged.
         * @param {boolean} draggable Whether the dialog can be dragged.
         */
        setDraggable(draggable: boolean): void;
        
        /**
         * Returns a dragger for moving the dialog and adds a class for the move cursor.
         * Defaults to allow dragging of the title only, but can be overridden if
         * different drag targets or dragging behavior is desired.
         * @return {!goog.fx.Dragger} The created dragger instance.
         * @protected
         */
        createDragger(): goog.fx.Dragger;
        
        /**
         * @return {boolean} Whether the dialog is draggable.
         */
        getDraggable(): boolean;
        
        /**
         * Sets the visibility of the dialog box and moves focus to the
         * default button. Lazily renders the component if needed. After this
         * method returns, isVisible() will always return the new state, even
         * if there is a transition.
         * @param {boolean} visible Whether the dialog should be visible.
         * @override
         */
        setVisible(visible: boolean): void;
        
        /**
         * @return {boolean} Whether this dialog has a title close button.
         */
        getHasTitleCloseButton(): boolean;
        
        /**
         * Sets whether the dialog should have a close button in the title bar. There
         * will always be an element for the title close button, but setting this
         * parameter to false will cause it to be hidden and have no active listener.
         * @param {boolean} b Whether this dialog should have a title close button.
         */
        setHasTitleCloseButton(b: boolean): void;
        
        /**
         * @return {boolean} Whether the escape key should close this dialog.
         */
        isEscapeToCancel(): boolean;
        
        /**
         * @param {boolean} b Whether the escape key should close this dialog.
         */
        setEscapeToCancel(b: boolean): void;
        
        /**
         * Sets whether the dialog should be disposed when it is hidden.  By default
         * dialogs are not disposed when they are hidden.
         * @param {boolean} b Whether the dialog should get disposed when it gets
         *     hidden.
         */
        setDisposeOnHide(b: boolean): void;
        
        /**
         * @return {boolean} Whether the dialog should be disposed when it is hidden.
         */
        getDisposeOnHide(): boolean;
        
        /**
         * Sets the button set to use.
         * Note: Passing in null will cause no button set to be rendered.
         * @param {goog.ui.Dialog.ButtonSet?} buttons The button set to use.
         */
        setButtonSet(buttons: goog.ui.Dialog.ButtonSet): void;
        
        /**
         * Returns the button set being used.
         * @return {goog.ui.Dialog.ButtonSet?} The button set being used.
         */
        getButtonSet(): goog.ui.Dialog.ButtonSet;
    }

    /**
     * Dialog event class.
     * @param {string} key Key identifier for the button.
     * @param {string|Element} caption Caption on the button (might be i18nlized).
     * @constructor
     * @extends {goog.events.Event}
     */
    export class Event extends goog.events.Event {
        constructor(key: string, caption: string);
    }

    /**
     * A button set defines the behaviour of a set of buttons that the dialog can
     * show.  Uses the {@link goog.structs.Map} interface.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *    goog.ui.Component} for semantics.
     * @constructor
     * @extends {goog.structs.Map}
     */
    export class ButtonSet extends goog.structs.Map {
        constructor(opt_domHelper?: goog.dom.DomHelper);
    }
}

declare module goog.ui.Dialog.ButtonSet {

    /**
     * The standard buttons (keys associated with captions).
     * @enum {!{key: string, caption: string}}
     */
    export interface DefaultButtons {
        OK: {key: string; caption: string};
        CANCEL: {key: string; caption: string};
        YES: {key: string; caption: string};
        NO: {key: string; caption: string};
        SAVE: {key: string; caption: string};
        CONTINUE: {key: string; caption: string};
    }

    /**
     * Creates a new ButtonSet with a single 'OK' button, which is also set with
     * cancel button semantics so that pressing escape will close the dialog.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    export function createOk(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'OK' (default) and 'Cancel' buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    export function createOkCancel(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'Yes' (default) and 'No' buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    export function createYesNo(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'Yes', 'No' (default), and 'Cancel' buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    export function createYesNoCancel(): goog.ui.Dialog.ButtonSet;

    /**
     * Creates a new ButtonSet with 'Continue', 'Save', and 'Cancel' (default)
     * buttons.
     * @return {!goog.ui.Dialog.ButtonSet} The created ButtonSet.
     */
    export function createContinueSaveCancel(): goog.ui.Dialog.ButtonSet;
}
