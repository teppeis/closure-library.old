declare module goog.labs.testing {

    /**
     * The GreaterThan matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class GreaterThanMatcher {
        constructor(value: number);
        
        /**
         * Determines if input value is greater than the expected value.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The lessThan matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class LessThanMatcher {
        constructor(value: number);
        
        /**
         * Determines if the input value is less than the expected value.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The GreaterThanEqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class GreaterThanEqualToMatcher {
        constructor(value: number);
        
        /**
         * Determines if the input value is greater than equal to the expected value.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The LessThanEqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class LessThanEqualToMatcher {
        constructor(value: number);
        
        /**
         * Determines if the input value is less than or equal to the expected value.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The EqualTo matcher.
     *
     * @param {number} value The value to compare.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class EqualToMatcher {
        constructor(value: number);
        
        /**
         * Determines if the input value is equal to the expected value.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The CloseTo matcher.
     *
     * @param {number} value The value to compare.
     * @param {number} range The range to check within.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class CloseToMatcher {
        constructor(value: number, range: number);
        
        /**
         * Determines if input value is within a certain range of the expected value.
         *
         * @override
         */
        matches(): void;
    }
}
