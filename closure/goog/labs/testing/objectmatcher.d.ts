declare module goog.labs.testing {

    /**
     * The Equals matcher.
     *
     * @param {!Object} expectedObject The expected object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class ObjectEqualsMatcher {
        constructor(expectedObject: Object);
        
        /**
         * Determines if two objects are the same.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The HasProperty matcher.
     *
     * @param {string} property Name of the property to test.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class HasPropertyMatcher {
        constructor(property: string);
        
        /**
         * Determines if an object has a property.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The InstanceOf matcher.
     *
     * @param {!Object} object The expected class object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class InstanceOfMatcher {
        constructor(object: Object);
        
        /**
         * Determines if an object is an instance of another object.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The IsNullOrUndefined matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class IsNullOrUndefinedMatcher {
        constructor();
        
        /**
         * Determines if input value is null or undefined.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The IsNull matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class IsNullMatcher {
        constructor();
        
        /**
         * Determines if input value is null.
         *
         * @override
         */
        matches(): void;
    }

    /**
     * The IsUndefined matcher.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class IsUndefinedMatcher {
        constructor();
        
        /**
         * Determines if input value is undefined.
         *
         * @override
         */
        matches(): void;
    }
}
