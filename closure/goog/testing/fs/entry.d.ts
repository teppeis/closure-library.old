declare module goog.testing.fs {

    /**
     * A mock filesystem entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry.
     * @param {string} name The name of this entry.
     * @constructor
     * @implements {goog.fs.Entry}
     */
    export class Entry {
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string);
        
        /**
         * Whether or not this entry has been deleted.
         * @type {boolean}
         */
        deleted: boolean;
        
        /**
         * @return {!goog.testing.fs.FileSystem}
         * @override
         */
        getFileSystem(): goog.testing.fs.FileSystem;
        
        /**
         * @return {!goog.testing.fs.Entry} A shallow copy of this entry object.
         */
        clone(): goog.testing.fs.Entry;
        
        /**
         * Return a deferred that will call its errback if this entry has been deleted.
         * In addition, the deferred will only run after a timeout of 0, and all its
         * callbacks will run with the entry as "this".
         *
         * @param {string} action The name of the action being performed. For error
         *     reporting.
         * @return {!goog.async.Deferred} The deferred that will be called after a
         *     timeout of 0.
         * @protected
         */
        checkNotDeleted(action: string): goog.async.Deferred<any>;
    }

    /**
     * A mock directory entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry. If this is null, that means this is the root
     *     directory and so is its own parent.
     * @param {string} name The name of this entry.
     * @param {!Object.<!goog.testing.fs.Entry>} children The map of child names to
     *     entry objects.
     * @constructor
     * @extends {goog.testing.fs.Entry}
     * @implements {goog.fs.DirectoryEntry}
     * @final
     */
    export class DirectoryEntry extends goog.testing.fs.Entry {
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string, children: Object);
        
        /**
         * Get a file entry synchronously, without waiting for a Deferred to resolve.
         *
         * @param {string} path The path to the file, relative to this directory.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     loading the file.
         * @param {string=} opt_data The string data encapsulated by the blob.
         * @param {string=} opt_type The mime type of the blob.
         * @return {!goog.testing.fs.FileEntry} The loaded file.
         */
        getFileSync(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior, opt_data?: string, opt_type?: string): goog.testing.fs.FileEntry;
        
        /**
         * Creates a file synchronously. This is a shorthand for getFileSync, useful for
         * setting up tests.
         *
         * @param {string} path The path to the file, relative to this directory.
         * @return {!goog.testing.fs.FileEntry} The created file.
         */
        createFileSync(path: string): goog.testing.fs.FileEntry;
        
        /**
         * Get a directory synchronously, without waiting for a Deferred to resolve.
         *
         * @param {string} path The path to the directory, relative to this one.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     loading the directory.
         * @return {!goog.testing.fs.DirectoryEntry} The loaded directory.
         */
        getDirectorySync(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior): goog.testing.fs.DirectoryEntry;
        
        /**
         * Creates a directory synchronously. This is a shorthand for getFileSync,
         * useful for setting up tests.
         *
         * @param {string} path The path to the directory, relative to this directory.
         * @return {!goog.testing.fs.DirectoryEntry} The created directory.
         */
        createDirectorySync(path: string): goog.testing.fs.DirectoryEntry;
        
        /**
         * Returns whether this directory has a child with the given name.
         *
         * @param {string} name The name of the entry to check for.
         * @return {boolean} Whether or not this has a child with the given name.
         */
        hasChild(name: string): boolean;
    }

    /**
     * A mock file entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry.
     * @param {string} name The name of this entry.
     * @param {string} data The data initially contained in the file.
     * @param {string=} opt_type The mime type of the blob.
     * @constructor
     * @extends {goog.testing.fs.Entry}
     * @implements {goog.fs.FileEntry}
     * @final
     */
    export class FileEntry extends goog.testing.fs.Entry {
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string, data: string, opt_type?: string);
        
        /**
         * Get the internal file representation synchronously, without waiting for a
         * Deferred to resolve.
         *
         * @return {!goog.testing.fs.File} The internal file blob referenced by this
         *     FileEntry.
         */
        fileSync(): goog.testing.fs.File;
    }
}
