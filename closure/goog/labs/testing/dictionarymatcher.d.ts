declare module goog.labs.testing {

    /**
     * The HasEntries matcher.
     *
     * @param {!Object} entries The entries to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class HasEntriesMatcher {
        constructor(entries: Object);
        
        /**
         * Determines if an object has particular entries.
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
     * The HasEntry matcher.
     *
     * @param {string} key The key for the entry.
     * @param {*} value The value for the key.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class HasEntryMatcher {
        constructor(key: string, value: any);
        
        /**
         * Determines if an object has a particular entry.
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
     * The HasKey matcher.
     *
     * @param {string} key The key to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class HasKeyMatcher {
        constructor(key: string);
        
        /**
         * Determines if an object has a key.
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
     * The HasValue matcher.
     *
     * @param {*} value The value to check in the object.
     *
     * @constructor
     * @struct
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    export class HasValueMatcher {
        constructor(value: any);
        
        /**
         * Determines if an object contains a value
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
