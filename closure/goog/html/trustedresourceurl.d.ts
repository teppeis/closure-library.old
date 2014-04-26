declare module goog.html {

    /**
     * A URL which is under application control and from which script, CSS, and
     * other resources that represent executable code, can be fetched.
     *
     * Given that the URL can only be constructed from strings under application
     * control and is used to load resources, bugs resulting in a malformed URL
     * should not have a security impact and are likely to be easily detectable
     * during testing. Given the wide number of non-RFC compliant URLs in use,
     * stricter validation could prevent some applications from being able to use
     * this type.
     *
     * Instances of this type must be created via the factory method,
     * ({@code goog.html.TrustedResourceUrl.fromConstant}), and not by invoking its
     * constructor. The constructor intentionally takes no parameters and the type
     * is immutable; hence only a default instance corresponding to the empty
     * string can be obtained via constructor invocation.
     *
     * @see goog.html.TrustedResourceUrl#fromConstant
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    export class TrustedResourceUrl {
        constructor();
        
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: any;
        
        /**
         * @override
         * @const
         */
        implementsGoogI18nBidiDirectionalString: any;
        
        /**
         * Returns this TrustedResourceUrl's value as a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code TrustedResourceUrl}, use
         * {@code goog.html.TrustedResourceUrl.unwrap} instead of this method. If in
         * doubt, assume that it's security relevant. In particular, note that
         * goog.html functions which return a goog.html type do not guarantee that
         * the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.from(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.from() as fakeSafeHtml instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.TrustedResourceUrl#unwrap
         * @override
         */
        getTypedStringValue(): void;
        
        /**
         * Returns this URLs directionality, which is always {@code LTR}.
         * @override
         */
        getDirection(): void;
        
        /**
         * Performs a runtime check that the provided object is indeed a
         * TrustedResourceUrl object, and returns its value.
         *
         * @param {!goog.html.TrustedResourceUrl} trustedResourceUrl The object to
         *     extract from.
         * @return {string} The trustedResourceUrl object's contained string, unless
         *     the run-time type check fails. In that case, {@code unwrap} returns an
         *     innocuous string, or, if assertions are enabled, throws
         *     {@code goog.asserts.AssertionError}.
         */
        static unwrap(trustedResourceUrl: goog.html.TrustedResourceUrl): string;
        
        /**
         * Creates a TrustedResourceUrl object from a compile-time constant string.
         *
         * Compile-time constant strings are inherently program-controlled and hence
         * trusted.
         *
         * @param {!goog.string.Const} url A compile-time-constant string from which to
         *     create a TrustedResourceUrl.
         * @return {!goog.html.TrustedResourceUrl} A TrustedResourceUrl object
         *     initialized to {@code url}.
         */
        static fromConstant(url: goog.string.Const): goog.html.TrustedResourceUrl;
    }
}
