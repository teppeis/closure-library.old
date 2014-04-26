declare module goog.labs.testing {

    /**
     * The AllOf matcher.
     *
     * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class AllOfMatcher {
        constructor(matchers: Array<goog.labs.testing.Matcher>);
        
        /**
         * Determines if all of the matchers match the input value.
         *
         * @override
         */
        matches(): void;
        
        /**
         * Describes why the matcher failed. The returned string is a concatenation of
         * all the failed matchers' error strings.
         *
         * @override
         */
        describe(): void;
    }

    /**
     * The AnyOf matcher.
     *
     * @param {!Array.<!goog.labs.testing.Matcher>} matchers Input matchers.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class AnyOfMatcher {
        constructor(matchers: Array<goog.labs.testing.Matcher>);
        
        /**
         * Determines if any of the matchers matches the input value.
         *
         * @override
         */
        matches(): void;
        
        /**
         * Describes why the matcher failed.
         *
         * @override
         */
        describe(): void;
    }

    /**
     * The IsNot matcher.
     *
     * @param {!goog.labs.testing.Matcher} matcher The matcher to negate.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class IsNotMatcher {
        constructor(matcher: goog.labs.testing.Matcher);
        
        /**
         * Determines if the input value doesn't satisfy a matcher.
         *
         * @override
         */
        matches(): void;
        
        /**
         * Describes why the matcher failed.
         *
         * @override
         */
        describe(): void;
    }
}
