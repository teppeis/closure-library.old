declare module goog.fs {

    /**
     * The interface for entries in the filesystem.
     * @interface
     */
    export function Entry(): void;

    /**
     * A directory in a local FileSystem.
     *
     * @interface
     * @extends {goog.fs.Entry}
     */
    export function DirectoryEntry(): void;

    /**
     * A file in a local filesystem.
     *
     * @interface
     * @extends {goog.fs.Entry}
     */
    export function FileEntry(): void;
}

declare module goog.fs.DirectoryEntry {

    /**
     * Behaviors for getting files and directories.
     * @enum {number}
     */
    export interface Behavior {
        DEFAULT: number;
        CREATE: number;
        CREATE_EXCLUSIVE: number;
    }
}
