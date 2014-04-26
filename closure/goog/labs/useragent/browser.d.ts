declare module goog.labs.userAgent.browser {

    /**
     * @return {boolean} Whether the user's browser is Opera.
     */
    export function isOpera(): boolean;

    /**
     * @return {boolean} Whether the user's browser is IE.
     */
    export function isIE(): boolean;

    /**
     * @return {boolean} Whether the user's browser is Firefox.
     */
    export function isFirefox(): boolean;

    /**
     * @return {boolean} Whether the user's browser is Safari.
     */
    export function isSafari(): boolean;

    /**
     * @return {boolean} Whether the user's browser is Chrome.
     */
    export function isChrome(): boolean;

    /**
     * @return {boolean} Whether the user's browser is the Android browser.
     */
    export function isAndroidBrowser(): boolean;

    /**
     * For more information, see:
     * http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html
     * @return {boolean} Whether the user's browser is Silk.
     */
    export function isSilk(): boolean;

    /**
     * @return {string} The browser version or empty string if version cannot be
     *     determined. Note that for Internet Explorer, this returns the version of
     *     the browser, not the version of the rendering engine. (IE 8 in
     *     compatibility mode will return 8.0 rather than 7.0. To determine the
     *     rendering engine version, look at document.documentMode instead. See
     *     http://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx for more
     *     details.)
     */
    export function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the browser version is higher or the same as the
     *     given version.
     */
    export function isVersionOrHigher(version: string): boolean;
}
