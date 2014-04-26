declare module goog.json.hybrid {

    /**
     * Attempts to serialize the JSON string natively, falling back to
     * {@code goog.json.serialize} if unsuccessful.
     * @param {!Object} obj JavaScript object to serialize to JSON.
     * @return {string} Resulting JSON string.
     */
    export function stringify(obj: Object): string;

    /**
     * Attempts to parse the JSON string natively, falling back to
     * {@code goog.json.parse} if unsuccessful.
     * @param {string} jsonString JSON string to parse.
     * @return {!Object} Resulting JSON object.
     */
    export function parse(jsonString: string): Object;

    /**
     * Attempts to parse the JSON string natively, falling back to
     * {@code goog.json.unsafeParse} if unsuccessful.
     * @param {string} jsonString JSON string to parse.
     * @return {!Object} Resulting JSON object.
     */
    export function unsafeParse(jsonString: string): Object;
}
