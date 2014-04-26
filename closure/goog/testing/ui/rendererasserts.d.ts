declare module goog.testing.ui.rendererasserts {

    /**
     * Assert that a control renderer constructor doesn't call getCssClass.
     *
     * @param {?function(new:goog.ui.ControlRenderer)} rendererClassUnderTest The
     *     renderer constructor to test.
     */
    export function assertNoGetCssClassCallsInConstructor(rendererClassUnderTest: () => any): void;
}
