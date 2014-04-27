declare module goog.labs.testing {

    /**
     * A matcher object to be used in assertThat statements.
     * @interface
     */
    export interface Matcher {
        
        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;
        
        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
        
        /**
         * Generates a Matcher from the ‘matches’ and ‘describe’ functions passed in.
         *
         * @param {!Function} matchesFunction The ‘matches’ function.
         * @param {Function=} opt_describeFunction The ‘describe’ function.
         * @return {!Function} The custom matcher.
         */
        static makeMatcher(matchesFunction: Function, opt_describeFunction?: Function): Function;
    }
}
