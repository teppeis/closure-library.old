declare module goog.labs.testing {

    /**
     * The ContainsString matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class ContainsStringMatcher {
        constructor(value: string);
        
        /**
         * Determines if input string contains the expected string.
         *
         * @override
         */
        matches(): void;
        
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The EndsWith matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class EndsWithMatcher {
        constructor(value: string);
        
        /**
         * Determines if input string ends with the expected string.
         *
         * @override
         */
        matches(): void;
        
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The EqualToIgnoringWhitespace matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class EqualToIgnoringWhitespaceMatcher {
        constructor(value: string);
        
        /**
         * Determines if input string contains the expected string.
         *
         * @override
         */
        matches(): void;
        
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The Equals matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class EqualsMatcher {
        constructor(value: string);
        
        /**
         * Determines if input string is equal to the expected string.
         *
         * @override
         */
        matches(): void;
        
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The MatchesRegex matcher.
     *
     * @param {!RegExp} regex The expected regex.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class RegexMatcher {
        constructor(regex: RegExp);
        
        /**
         * Determines if input string is equal to the expected string.
         *
         * @override
         */
        matches(): void;
        
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The StartsWith matcher.
     *
     * @param {string} value The expected string.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class StartsWithMatcher {
        constructor(value: string);
        
        /**
         * Determines if input string starts with the expected string.
         *
         * @override
         */
        matches(): void;
        
        /**
         * @override
         */
        describe(): void;
    }

    /**
     * The StringContainsInOrdermatcher.
     *
     * @param {Array.<string>} values The expected string values.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class StringContainsInOrderMatcher {
        constructor(values: Array<string>);
        
        /**
         * Determines if input string contains, in order, the expected array of strings.
         *
         * @override
         */
        matches(): void;
        
        /**
         * @override
         */
        describe(): void;
    }
}
