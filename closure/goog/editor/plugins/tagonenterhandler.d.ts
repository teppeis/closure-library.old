declare module goog.editor.plugins {

    /**
     * Plugin to handle enter keys. This subclass normalizes all browsers to use
     * the given block tag on enter.
     * @param {goog.dom.TagName} tag The type of tag to add on enter.
     * @constructor
     * @extends {goog.editor.plugins.EnterHandler}
     */
    export class TagOnEnterHandler extends goog.editor.plugins.EnterHandler {
        constructor(tag: goog.dom.TagName);
        
        /** @override */
        getTrogClassId(): void;
        
        /** @override */
        getNonCollapsingBlankHtml(): void;
        
        /**
         * This plugin is active on uneditable fields so it can provide a value for
         * queryCommandValue calls asking for goog.editor.Command.BLOCKQUOTE.
         * @return {boolean} True.
         * @override
         */
        activeOnUneditableFields(): boolean;
        
        /** @override */
        isSupportedCommand(): void;
        
        /** @override */
        queryCommandValue(): void;
        
        /** @override */
        handleBackspaceInternal(): void;
        
        /** @override */
        processParagraphTagsInternal(): void;
        
        /** @override */
        handleDeleteGecko(): void;
        
        /** @override */
        handleKeyUpInternal(): void;
        
        /** @override */
        handleEnterWebkitInternal(): void;
        
        /** @override */
        handleEnterAtCursorGeckoInternal(): void;
    }
}
