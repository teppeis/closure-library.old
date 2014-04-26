declare module goog.testing.fs {

    /**
     * A mock FileWriter object. This emits the same events as
     * {@link goog.fs.FileSaver} and {@link goog.fs.FileWriter}.
     *
     * @param {!goog.testing.fs.FileEntry} fileEntry The file entry to write to.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class FileWriter extends goog.events.EventTarget {
        constructor(fileEntry: goog.testing.fs.FileEntry);
        
        /**
         * @see {goog.fs.FileSaver#getReadyState}
         * @return {goog.fs.FileSaver.ReadyState} The ready state.
         */
        getReadyState(): goog.fs.FileSaver.ReadyState;
        
        /**
         * @see {goog.fs.FileSaver#getError}
         * @return {goog.fs.Error} The error.
         */
        getError(): goog.fs.Error;
        
        /**
         * @see {goog.fs.FileWriter#getPosition}
         * @return {number} The position.
         */
        getPosition(): number;
        
        /**
         * @see {goog.fs.FileWriter#getLength}
         * @return {number} The length.
         */
        getLength(): number;
        
        /**
         * @see {goog.fs.FileSaver#abort}
         */
        abort(): void;
        
        /**
         * @see {goog.fs.FileWriter#write}
         * @param {!goog.testing.fs.Blob} blob The blob to write.
         */
        write(blob: goog.testing.fs.Blob): void;
        
        /**
         * @see {goog.fs.FileWriter#truncate}
         * @param {number} size The size to truncate to.
         */
        truncate(size: number): void;
        
        /**
         * @see {goog.fs.FileWriter#seek}
         * @param {number} offset The offset to seek to.
         */
        seek(offset: number): void;
    }
}
