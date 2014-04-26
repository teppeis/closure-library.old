declare module goog.html.legacyconversions {

    /**
     * Performs an "unchecked conversion" from string to SafeHtml for legacy API
     * purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} html A string to be converted to SafeHtml.
     * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml
     *     object.
     */
    export function safeHtmlFromString(html: string): goog.html.SafeHtml;

    /**
     * Performs an "unchecked conversion" from string to TrustedResourceUrl for
     * legacy API purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} url A string to be converted to TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} The value of url, wrapped in a
     *     TrustedResourceUrl object.
     */
    export function trustedResourceUrlFromString(url: string): goog.html.TrustedResourceUrl;

    /**
     * Performs an "unchecked conversion" from string to SafeUrl for legacy API
     * purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} url A string to be converted to SafeUrl.
     * @return {!goog.html.SafeUrl} The value of url, wrapped in a SafeUrl
     *     object.
     */
    export function safeUrlFromString(url: string): goog.html.SafeUrl;
}
