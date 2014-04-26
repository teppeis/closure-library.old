declare module goog.format {

    /**
     * This class formats HTML to be more human-readable.
     * TODO(user): Add hierarchical indentation.
     * @param {number=} opt_timeOutMillis Max # milliseconds to spend on #format. If
     *     this time is exceeded, return partially formatted. 0 or negative number
     *     indicates no timeout.
     * @constructor
     * @final
     */
    export class HtmlPrettyPrinter {
        constructor(opt_timeOutMillis?: number);
        
        /**
         * Static utility function. See prototype #format.
         * @param {string} html The HTML text to pretty print.
         * @return {string} Formatted result.
         */
        static format(html: string): string;
        
        /**
         * Breaks up HTML so it's easily readable by the user.
         * @param {string} html The HTML text to pretty print.
         * @return {string} Formatted result.
         * @throws {Error} Regex error, data loss, or endless loop detected.
         */
        format(html: string): string;
    }

    /**
     * This class is a buffer to which we push our output. It tracks line breaks to
     * make sure we don't add unnecessary ones.
     * @constructor
     * @final
     */
    export class Buffer {
        constructor();
    }
}
