declare module goog.string.html {

    /**
     * The HTML types the parser supports.
     * @enum {number}
     */
    export interface AttributeType {
        NONE: number;
        URI: number;
        URI_FRAGMENT: number;
        SCRIPT: number;
        STYLE: number;
        ID: number;
        IDREF: number;
        IDREFS: number;
        GLOBAL_NAME: number;
        LOCAL_NAME: number;
        CLASSES: number;
        FRAME_TARGET: number;
    }

    /**
     * A map of attributes to types it has.
     * @enum {number}
     */
    export interface Attributes {
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
        undefined: number;
    }

    /**
     * An implementation of the {@code goog.string.HtmlSaxHandler} interface that
     * will take each of the html tags and sanitize it.
     *
     * @param {goog.string.StringBuffer} stringBuffer A string buffer, used to
     *     output the html as we sanitize it.
     * @param {?function(string):string} opt_urlPolicy An optional function to be
     *     applied in URLs.
     * @param {?function(string):string} opt_nmTokenPolicy An optional function to
     *     be applied in names.
     * @constructor
     * @extends {goog.string.html.HtmlSaxHandler}
     */
    export class HtmlSanitizer extends goog.string.html.HtmlSaxHandler {
        constructor(stringBuffer: goog.string.StringBuffer, opt_urlPolicy: (arg0: string) => string, opt_nmTokenPolicy: (arg0: string) => string);
    }

    /**
     * Strips unsafe tags and attributes from HTML.
     *
     * @param {string} htmlText The HTML text to sanitize.
     * @param {function(string): string=} opt_urlPolicy A transform to apply to URL
     *     attribute values.
     * @param {function(string): string=} opt_nmTokenPolicy A transform to apply to
     *     names, IDs, and classes.
     * @return {string} A sanitized HTML, safe to be embedded on the page.
     */
    export function htmlSanitize(htmlText: string, opt_urlPolicy?: (arg0: string) => string, opt_nmTokenPolicy?: (arg0: string) => string): string;
}
