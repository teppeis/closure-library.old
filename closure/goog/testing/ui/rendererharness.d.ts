declare module goog.testing.ui {

    /**
     * A driver for testing renderers.
     *
     * @param {goog.ui.ControlRenderer} renderer A renderer to test.
     * @param {Element} renderParent The parent of the element where controls will
     *     be rendered.
     * @param {Element} decorateParent The parent of the element where controls will
     *     be decorated.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    export class RendererHarness extends goog.Disposable {
        constructor(renderer: goog.ui.ControlRenderer, renderParent: Element, decorateParent: Element);
        
        /**
         * Attach a control and render its DOM.
         * @param {goog.ui.Control} control A control.
         * @return {Element} The element created.
         */
        attachControlAndRender(control: goog.ui.Control): Element;
        
        /**
         * Attach a control and decorate the element given in the constructor.
         * @param {goog.ui.Control} control A control.
         * @return {Element} The element created.
         */
        attachControlAndDecorate(control: goog.ui.Control): Element;
        
        /**
         * Assert that the rendered element and the decorated element match.
         */
        assertDomMatches(): void;
    }
}
