declare module goog.editor.plugins {

    /**
     * First Strong plugin.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    export class FirstStrong extends goog.editor.Plugin {
        constructor();
        
        /**
         * The name of the attribute which records the input text.
         *
         * @type {string}
         * @const
         */
        static INPUT_ATTRIBUTE: string;
        
        /** @override */
        getTrogClassId(): void;
        
        /** @override */
        queryCommandValue(): void;
        
        /** @override */
        handleSelectionChange(): void;
        
        /** @override */
        handleKeyPress(): void;
        
        /**
         * Calls the flip directionality commands.  This is done here so things go into
         * the redo-undo stack at the expected order; fist enter the input, then flip
         * directionality.
         * @override
         */
        handleKeyUp(): void;
    }
}
