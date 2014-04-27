declare module goog.string$.html {

    /**
     * HTML entities that are encoded/decoded.
     * TODO(user): use {@code goog.string.htmlEncode} instead.
     * @enum {string}
     */
    export interface Entities {
        lt: string;
        gt: string;
        amp: string;
        nbsp: string;
        quot: string;
        apos: string;
    }

    /**
     * The html eflags, used internally on the parser.
     * @enum {number}
     */
    export interface EFlags {
        OPTIONAL_ENDTAG: number;
        EMPTY: number;
        CDATA: number;
        RCDATA: number;
        UNSAFE: number;
        FOLDABLE: number;
    }

    /**
     * An Html parser: {@code parse} takes a string and calls methods on
     * {@code goog.string.html.HtmlSaxHandler} while it is visiting it.
     *
     * @constructor
     */
    export class HtmlParser {
        constructor();
        
        /**
         * A map of element to a bitmap of flags it has, used internally on the parser.
         * @type {Object}
         */
        static Elements: Object;
        
        /**
         * Given a SAX-like {@code goog.string.html.HtmlSaxHandler} parses a
         * {@code htmlText} and lets the {@code handler} know the structure while
         * visiting the nodes.
         *
         * @param {goog.string.html.HtmlSaxHandler} handler The HtmlSaxHandler that will
         *     receive the events.
         * @param {string} htmlText The html text.
         */
        parse(handler: goog.string$.html.HtmlSaxHandler, htmlText: string): void;
    }

    /**
     * An interface to the {@code goog.string.html.HtmlParser} visitor, that gets
     * called while the HTML is being parsed.
     *
     * @constructor
     */
    export class HtmlSaxHandler {
        constructor();
        
        /**
         * Handler called when the parser is starting to parse the document.
         */
        startDoc: any;
        
        /**
         * Handler called when the parsing is done.
         */
        endDoc: any;
        
        /**
         * Handler called when the parser found a new tag.
         * @param {string} name The name of the tag that is starting.
         * @param {Array.<string>} attributes The attributes of the tag.
         */
        startTag(name: string, attributes: Array<string>): void;
        
        /**
         * Handler called when the parser found a closing tag.
         * @param {string} name The name of the tag that is ending.
         */
        endTag(name: string): void;
        
        /**
         * Handler called when PCDATA is found.
         * @param {string} text The PCDATA text found.
         */
        pcdata(text: string): void;
        
        /**
         * Handler called when RCDATA is found.
         * @param {string} text The RCDATA text found.
         */
        rcdata(text: string): void;
        
        /**
         * Handler called when CDATA is found.
         * @param {string} text The CDATA text found.
         */
        cdata(text: string): void;
    }

    /**
     * TODO(goto): why isn't this in the string package ? does this solves any
     * real problem ? move it to the goog.string package if it does.
     *
     * @param {string} str The string to lower case.
     * @return {string} The str in lower case format.
     */
    export function toLowerCase(str: string): string;
}
