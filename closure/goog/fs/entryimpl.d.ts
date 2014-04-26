declare module goog.fs {

    /**
     * Base class for concrete implementations of goog.fs.Entry.
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!Entry} entry The underlying Entry object.
     * @constructor
     * @implements {goog.fs.Entry}
     */
    export class EntryImpl {
        constructor(fs: goog.fs.FileSystem, entry: Entry);
        
        /** @override */
        toUri: any;
        
        /** @override */
        isFile(): void;
        
        /** @override */
        isDirectory(): void;
        
        /** @override */
        getName(): void;
        
        /** @override */
        getFullPath(): void;
        
        /** @override */
        getFileSystem(): void;
        
        /** @override */
        getLastModified(): void;
        
        /** @override */
        getMetadata(): void;
        
        /** @override */
        moveTo(): void;
        
        /** @override */
        copyTo(): void;
        
        /** @override */
        wrapEntry(): void;
        
        /** @override */
        toUrl(): void;
        
        /** @override */
        remove(): void;
        
        /** @override */
        getParent(): void;
    }

    /**
     * A directory in a local FileSystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.FileSystem#getRoot} or
     * {@link goog.fs.DirectoryEntry#getDirectoryEntry}.
     *
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!DirectoryEntry} dir The underlying DirectoryEntry object.
     * @constructor
     * @extends {goog.fs.EntryImpl}
     * @implements {goog.fs.DirectoryEntry}
     * @final
     */
    export class DirectoryEntryImpl extends goog.fs.EntryImpl {
        constructor(fs: goog.fs.FileSystem, dir: DirectoryEntry);
        
        /** @override */
        getFile(): void;
        
        /** @override */
        getDirectory(): void;
        
        /** @override */
        createPath(): void;
        
        /** @override */
        listDirectory(): void;
        
        /** @override */
        removeRecursively(): void;
    }

    /**
     * A file in a local filesystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.DirectoryEntry#getFile}.
     *
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!FileEntry} file The underlying FileEntry object.
     * @constructor
     * @extends {goog.fs.EntryImpl}
     * @implements {goog.fs.FileEntry}
     * @final
     */
    export class FileEntryImpl extends goog.fs.EntryImpl {
        constructor(fs: goog.fs.FileSystem, file: FileEntry);
        
        /** @override */
        createWriter(): void;
        
        /** @override */
        file(): void;
    }
}
