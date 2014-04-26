declare module goog.testing.fs {

    /**
     * A mock filesystem object.
     *
     * @param {string=} opt_name The name of the filesystem.
     * @constructor
     * @implements {goog.fs.FileSystem}
     * @final
     */
    export class FileSystem {
        constructor(opt_name?: string);
        
        /** @override */
        getName(): void;
        
        /**
         * @override
         * @return {!goog.testing.fs.DirectoryEntry}
         */
        getRoot(): goog.testing.fs.DirectoryEntry;
    }
}
