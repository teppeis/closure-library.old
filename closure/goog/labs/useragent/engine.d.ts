declare module goog.labs.userAgent.engine {

    /**
     * @return {boolean} Whether the rendering engine is Presto.
     */
    export function isPresto(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is Trident.
     */
    export function isTrident(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is WebKit.
     */
    export function isWebKit(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is Gecko.
     */
    export function isGecko(): boolean;

    /**
     * @return {string} The rendering engine's version or empty string if version
     *     can't be determined.
     */
    export function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the rendering engine version is higher or the same
     *     as the given version.
     */
    export function isVersionOrHigher(version: string): boolean;
}
