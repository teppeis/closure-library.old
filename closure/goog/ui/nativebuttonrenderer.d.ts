declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.Button}s.  Renders and decorates native HTML
     * button elements.  Since native HTML buttons have built-in support for many
     * features, overrides many expensive (and redundant) superclass methods to
     * be no-ops.
     * @constructor
     * @extends {goog.ui.ButtonRenderer}
     */
    export class NativeButtonRenderer extends goog.ui.ButtonRenderer {
        constructor();
        
        /**
         * @override
         * Native buttons don't support text selection.
         */
        setAllowTextSelection: any;
        
        /**
         * @override
         * Native buttons natively support right-to-left rendering.
         */
        setRightToLeft: any;
        
        /**
         * @override
         * Native buttons natively support keyboard focus.
         */
        setFocusable: any;
        
        /**
         * @override
         * Native buttons don't need ARIA states to support accessibility, so this is
         * a no-op.
         */
        updateAriaState: any;
        
        /**
         * Returns the button's contents wrapped in a native HTML button element.  Sets
         * the button's disabled attribute as needed.
         * @param {goog.ui.Control} button Button to render.
         * @return {Element} Root element for the button (a native HTML button element).
         * @override
         */
        createDom(button: goog.ui.Control): Element;
        
        /**
         * Overrides {@link goog.ui.ButtonRenderer#canDecorate} by returning true only
         * if the element is an HTML button.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Native buttons natively support BiDi and keyboard focus.
         * @suppress {visibility} getHandler and performActionInternal
         * @override
         */
        initializeDom(): void;
        
        /**
         * @override
         * Native buttons are always focusable as long as they are enabled.
         */
        isFocusable(): void;
        
        /**
         * @override
         * Native buttons also expose the DISABLED state in the HTML button's
         * {@code disabled} attribute.
         */
        setState(): void;
        
        /**
         * @override
         * Native buttons store their value in the HTML button's {@code value}
         * attribute.
         */
        getValue(): void;
        
        /**
         * @override
         * Native buttons also expose their value in the HTML button's {@code value}
         * attribute.
         */
        setValue(): void;
    }
}
