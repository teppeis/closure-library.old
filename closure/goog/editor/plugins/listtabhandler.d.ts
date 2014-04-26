declare module goog.editor.plugins {

    /**
     * Plugin to handle tab keys in lists to indent and outdent.
     * @constructor
     * @extends {goog.editor.plugins.AbstractTabHandler}
     * @final
     */
    export class ListTabHandler extends goog.editor.plugins.AbstractTabHandler {
        constructor();
        
        /** @override */
        getTrogClassId(): void;
        
        /** @override */
        handleTabKey(): void;
    }
}
