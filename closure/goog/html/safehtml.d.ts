declare module goog.html {

    /**
     * A string that is safe to use in HTML context in DOM APIs and HTML documents.
     *
     * A SafeHtml is a string-like object that carries the security type contract
     * that its value as a string will not cause untrusted script execution when
     * evaluated as HTML in a browser.
     *
     * Values of this type are guaranteed to be safe to use in HTML contexts,
     * such as, assignment to the innerHTML DOM property, or interpolation into
     * a HTML template in HTML PC_DATA context, in the sense that the use will not
     * result in a Cross-Site-Scripting vulnerability.
     *
     * Instances of this type must be created via the factory methods
     * ({@code goog.html.SafeHtml.from}, {@code goog.html.SafeHtml.htmlEscape}), etc
     * and not by invoking its constructor.  The constructor intentionally takes no
     * parameters and the type is immutable; hence only a default instance
     * corresponding to the empty string can be obtained via constructor invocation.
     *
     * @see goog.html.SafeHtml#from
     * @see goog.html.SafeHtml#htmlEscape
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    export class SafeHtml {
        constructor();
        
        /**
         * A SafeHtml instance corresponding to the empty string.
         * @const {!goog.html.SafeHtml}
         */
        static EMPTY: any;
        
        /**
         * Returns this SafeHtml's value a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeHtml}, use {@code goog.html.SafeHtml.unwrap} instead of
         * this method. If in doubt, assume that it's security relevant. In particular,
         * note that goog.html functions which return a goog.html type do not guarantee
         * that the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.from(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.from() as fakeSafeHtml instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.SafeHtml#unwrap
         * @override
         */
        getTypedStringValue(): void;
        
        /**
         * Performs a runtime check that the provided object is indeed a SafeHtml
         * object, and returns its value.
         * @param {!goog.html.SafeHtml} safeHtml The object to extract from.
         * @return {string} The SafeHtml object's contained string, unless the run-time
         *     type check fails. In that case, {@code unwrap} returns an innocuous
         *     string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(safeHtml: goog.html.SafeHtml): string;
        
        /**
         * Returns HTML-escaped text as a SafeHtml object.
         *
         * If text is of a type that implements
         * {@code goog.i18n.bidi.DirectionalString}, the directionality of the new
         * {@code SafeHtml} object is set to {@code text}'s directionality, if known.
         * Otherwise, the directionality of the resulting SafeHtml is unknown (i.e.,
         * {@code null}).
         *
         * @param {!goog.html.SafeHtml.StringLike_} text The string to escape.
         * @return {!goog.html.SafeHtml} The escaped string, wrapped as a SafeHtml.
         */
        static htmlEscape(text: goog.html.SafeHtml.StringLike_): goog.html.SafeHtml;
        
        /**
         * Returns HTML-escaped text as a SafeHtml object with newlines changed to <br>.
         * @param {!goog.html.SafeHtml.StringLike_} text The string to escape.
         * @return {!goog.html.SafeHtml} The escaped string, wrapped as a SafeHtml.
         */
        static htmlEscapePreservingNewlines(text: goog.html.SafeHtml.StringLike_): goog.html.SafeHtml;
        
        /**
         * Coerces an arbitrary object into a SafeHtml object.
         *
         * If {@code textOrHtml} is already of type {@code goog.html.SafeHtml}, the same
         * object is returned. Otherwise, {@code textOrHtml} is coerced to string, and
         * HTML-escaped. If {@code textOrHtml} is of a type that implements
         * {@code goog.i18n.bidi.DirectionalString}, its directionality, if known, is
         * preserved.
         *
         * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text or SafeHtml to
         *     coerce.
         * @return {!goog.html.SafeHtml} The resulting SafeHtml object.
         */
        static from(textOrHtml: goog.html.SafeHtml.TextOrHtml_): goog.html.SafeHtml;
        
        /**
         * Creates a SafeHtml content consisting of a tag with optional attributes and
         * optional content.
         * @param {string} tagName The name of the tag. Only tag names consisting of
         *     [a-zA-Z0-9-] are allowed. <link>, <script> and <style> tags are not
         *     supported.
         * @param {!Object.<string, goog.html.SafeHtml.AttributeValue_>=}
         *     opt_attributes Mapping from attribute names to their values. Only
         *     attribute names consisting of [a-zA-Z0-9-] are allowed. Attributes with
         *     a special meaning (e.g. on*) require goog.string.Const value, attributes
         *     containing URL require goog.string.Const or goog.html.SafeUrl. Value of
         *     null or undefined causes the attribute to be omitted. Values are
         *     HTML-escaped before usage.
         * @param {!goog.html.SafeHtml.TextOrHtml_|
         *     !Array.<!goog.html.SafeHtml.TextOrHtml_>=} opt_content Content to put
         *     inside the tag. This must be empty for void tags like <br>. Array
         *     elements are concatenated.
         * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
         * @throws {Error} If invalid tag name, attribute name, or attribute value is
         *     provided.
         * @throws {goog.asserts.AssertionError} If content for void tag is provided.
         */
        static create(tagName: string, opt_attributes?: Object, opt_content?: goog.html.SafeHtml.TextOrHtml_): goog.html.SafeHtml;
        
        /**
         * Creates a new SafeHtml object by concatenating the values.
         * @param {...!goog.html.SafeHtml.TextOrHtml_|
         *     !Array.<!goog.html.SafeHtml.TextOrHtml_>} var_args Elements of array
         *     arguments would be processed recursively.
         * @return {!goog.html.SafeHtml}
         */
        static concat(...var_args: goog.html.SafeHtml.TextOrHtml_[]): goog.html.SafeHtml;
    }
}

declare module goog.html.SafeHtml {

    /**
     * Shorthand for union of types that can be sensibly converted to strings.
     * @private
     * @typedef {string|number|boolean|!goog.string.TypedString|
     *           !goog.i18n.bidi.DirectionalString}
     */
    export interface StringLike_ {
    }

    /**
     * Shorthand for union of types that can be sensibly converted to SafeHtml.
     * @private
     * @typedef {!goog.html.SafeHtml.StringLike_|!goog.html.SafeHtml}
     */
    export interface TextOrHtml_ {
    }

    /**
     * @private
     * @typedef {string|goog.string.Const|goog.html.SafeUrl|goog.html.SafeStyle}
     */
    export interface AttributeValue_ {
    }
}
