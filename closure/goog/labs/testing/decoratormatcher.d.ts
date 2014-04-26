declare module goog.labs.testing {

    /**
     * The Anything matcher. Matches all possible inputs.
     *
     * @constructor
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class AnythingMatcher {
        constructor();
        
        /**
         * Matches anything. Useful if one doesn't care what the object under test is.
         *
         * @override
         */
        matches(): void;
        
        /**
         * This method is never called but is needed so AnythingMatcher implements the
         * Matcher interface.
         *
         * @override
         */
        describe(): void;
    }
}
