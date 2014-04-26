declare module goog.labs.testing {

    /**
     * A matcher object to be used in assertThat statements.
     * @interface
     */
    export function Matcher(): void;
}

declare module goog.labs.testing.Matcher {

    /**
     * Generates a Matcher from the ‘matches’ and ‘describe’ functions passed in.
     *
     * @param {!Function} matchesFunction The ‘matches’ function.
     * @param {Function=} opt_describeFunction The ‘describe’ function.
     * @return {!Function} The custom matcher.
     */
    export function makeMatcher(matchesFunction: Function, opt_describeFunction?: Function): Function;
}
