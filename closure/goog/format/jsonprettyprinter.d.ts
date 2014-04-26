declare module goog.format {

    /**
     * Formats a JSON object as a string, properly indented for display.  Supports
     * displaying the string as text or html.  Users can also specify their own
     * set of delimiters for different environments.  For example, the JSON object:
     *
     * <code>{"a": 1, "b": {"c": null, "d": true, "e": [1, 2]}}</code>
     *
     * Will be displayed like this:
     *
     * <code>{
     *   "a": 1,
     *   "b": {
     *     "c": null,
     *     "d": true,
     *     "e": [
     *       1,
     *       2
     *     ]
     *   }
     * }</code>
     * @param {goog.format.JsonPrettyPrinter.TextDelimiters} delimiters Container
     *     for the various strings to use to delimit objects, arrays, newlines, and
     *     other pieces of the output.
     * @constructor
     */
    export class JsonPrettyPrinter {
        constructor(delimiters: goog.format.JsonPrettyPrinter.TextDelimiters);
        
        /**
         * Formats a JSON object as a string, properly indented for display.
         * @param {*} json The object to pretty print. It could be a JSON object, a
         *     string representing a JSON object, or any other type.
         * @return {string} Returns a string of the JSON object, properly indented for
         *     display.
         */
        format(json: any): string;
    }

    /**
     * A container for the delimiting characters used to display the JSON string
     * to a text display.  Each delimiter is a publicly accessible property of
     * the object, which makes it easy to tweak delimiters to specific environments.
     * @constructor
     */
    export class TextDelimiters {
        constructor();
    }

    /**
     * A container for the delimiting characters used to display the JSON string
     * to an HTML <code>&lt;pre&gt;</code> or <code>&lt;code&gt;</code> element.
     * @constructor
     * @extends {goog.format.JsonPrettyPrinter.TextDelimiters}
     * @final
     */
    export class HtmlDelimiters extends goog.format.JsonPrettyPrinter.TextDelimiters {
        constructor();
    }
}
