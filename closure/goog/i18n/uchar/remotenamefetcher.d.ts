declare module goog.i18n.uChar {

    /**
     * Builds the RemoteNameFetcher object. This object retrieves codepoint names
     * from a remote data source.
     *
     * @param {string} dataSourceUri URI to the data source.
     * @constructor
     * @implements {goog.i18n.uChar.NameFetcher}
     * @extends {goog.Disposable}
     * @final
     */
    export class RemoteNameFetcher extends goog.Disposable {
        constructor(dataSourceUri: string);
        
        /** @override */
        disposeInternal(): void;
        
        /** @override */
        prefetch(): void;
        
        /** @override */
        getName(): void;
        
        /** @override */
        isNameAvailable(): void;
    }
}
