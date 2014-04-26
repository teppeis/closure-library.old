declare module goog.ui {

    /**
     * Renderer for {@link goog.ui.Textarea}s.  Renders and decorates native HTML
     * textarea elements.  Since native HTML textareas have built-in support for
     * many features, overrides many expensive (and redundant) superclass methods to
     * be no-ops.
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     * @final
     */
    export class TextareaRenderer extends goog.ui.ControlRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Textareas natively support right-to-left rendering.
         * @override
         */
        setRightToLeft: any;
        
        /**
         * Textareas natively support keyboard focus.
         * @override
         */
        setFocusable: any;
        
        /**
         * Textareas don't need ARIA states to support accessibility, so this is
         * a no-op.
         * @override
         */
        updateAriaState: any;
        
        /**
         * Returns the textarea's contents wrapped in an HTML textarea element.  Sets
         * the textarea's disabled attribute as needed.
         * @param {goog.ui.Control} textarea Textarea to render.
         * @return {!Element} Root element for the Textarea control (an HTML textarea
         *     element).
         * @override
         */
        createDom(textarea: goog.ui.Control): Element;
        
        /**
         * Overrides {@link goog.ui.TextareaRenderer#canDecorate} by returning true only
         * if the element is an HTML textarea.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Textareas are always focusable as long as they are enabled.
         * @override
         */
        isFocusable(): void;
        
        /**
         * Textareas also expose the DISABLED state in the HTML textarea's
         * {@code disabled} attribute.
         * @override
         */
        setState(): void;
    }
}
