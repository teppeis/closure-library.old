declare module goog.editor.plugins {

    /**
     * Commands that can be passed as the optional argument to execCommand.
     * @enum {string}
     */
    export interface HEADER_COMMAND {
        H1: string;
        H2: string;
        H3: string;
        H4: string;
    }

    /**
     * Applies header styles to text.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    export class HeaderFormatter extends goog.editor.Plugin {
        constructor();
        
        /** @override */
        getTrogClassId(): void;
        
        /**
         * @override
         */
        handleKeyboardShortcut(): void;
    }
}
