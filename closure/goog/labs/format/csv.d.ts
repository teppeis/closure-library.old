declare module goog.labs.format.csv {

    /**
     * A token -- a single-character string or a sentinel.
     * @typedef {string|!goog.labs.format.csv.Sentinels_}
     */
    export interface Token {
    }

    /**
     * Error thrown when parsing fails.
     *
     * @param {string} text The CSV source text being parsed.
     * @param {number} index The index, in the string, of the position of the
     *      error.
     * @param {string=} opt_message A description of the violated parse expectation.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    export class ParseError extends goog.debug.Error {
        constructor(text: string, index: number, opt_message?: string);
        
        /** @inheritDoc */
        name: any;
    }

    /**
     * @define {boolean} Enable verbose debugging. This is a flag so it can be
     * enabled in production if necessary post-compilation.  Otherwise, debug
     * information will be stripped to minimize final code size.
     */
    export var ENABLE_VERBOSE_DEBUGGING: any;

    /**
     * Parses a CSV string to create a two-dimensional array.
     *
     * This function does not process header lines, etc -- such transformations can
     * be made on the resulting array.
     *
     * @param {string} text The entire CSV text to be parsed.
     * @param {boolean=} opt_ignoreErrors Whether to ignore parsing errors and
     *      instead try to recover and keep going.
     * @return {!Array.<!Array.<string>>} The parsed CSV.
     */
    export function parse(text: string, opt_ignoreErrors?: boolean): Array<Array<string>>;
}
