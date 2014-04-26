declare module goog.fs {

    /**
     * @typedef {!{createObjectURL: (function(!Blob): string),
     *             revokeObjectURL: function(string): void}}
     */
    export interface UrlObject_ {
    }

    /**
     * Returns a temporary FileSystem object. A temporary filesystem may be deleted
     * by the user agent at its discretion.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    export function getTemporary(size: number): goog.async.Deferred;

    /**
     * Returns a persistent FileSystem object. A persistent filesystem will never be
     * deleted without the user's or application's authorization.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    export function getPersistent(size: number): goog.async.Deferred;

    /**
     * Creates a blob URL for a blob object.
     *
     * @param {!Blob} blob The object for which to create the URL.
     * @return {string} The URL for the object.
     */
    export function createObjectUrl(blob: Blob): string;

    /**
     * Revokes a URL created by {@link goog.fs.createObjectUrl}.
     *
     * @param {string} url The URL to revoke.
     */
    export function revokeObjectUrl(url: string): void;

    /**
     * Concatenates one or more values together and converts them to a Blob.
     *
     * @param {...(string|!Blob|!ArrayBuffer)} var_args The values that will make up
     *     the resulting blob.
     * @return {!Blob} The blob.
     */
    export function getBlob(...var_args: string[]): Blob;

    /**
     * Converts a Blob or a File into a string. This should only be used when the
     * blob is known to be small.
     *
     * @param {!Blob} blob The blob to convert.
     * @param {string=} opt_encoding The name of the encoding to use.
     * @return {!goog.async.Deferred} The deferred string. If an error occurrs, the
     *     errback is called with a {@link goog.fs.Error}.
     * @deprecated Use {@link goog.fs.FileReader.readAsText} instead.
     */
    export function blobToString(blob: Blob, opt_encoding?: string): goog.async.Deferred;

    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices can be used
     * to count bytes from the end of the blob (-1 == blob.size - 1). Indices
     * are always clamped to blob range. If end is omitted, all the data till
     * the end of the blob is taken.
     *
     * @param {!Blob} blob The blob to be sliced.
     * @param {number} start Index of the starting byte.
     * @param {number=} opt_end Index of the ending byte.
     * @return {Blob} The blob slice or null if not supported.
     */
    export function sliceBlob(blob: Blob, start: number, opt_end?: number): Blob;
}
