declare module goog.testing.graphics {

    /**
     * Test if the given path matches the expected array of commands and parameters.
     * @param {Array.<string|number>} expected The expected array of commands and
     *     parameters.
     * @param {goog.graphics.Path} path The path to test against.
     */
    export function assertPathEquals(expected: Array<string>, path: goog.graphics.Path): void;
}
