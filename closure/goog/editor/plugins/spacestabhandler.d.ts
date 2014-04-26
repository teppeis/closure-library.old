declare module goog.editor.plugins {

    /**
     * Plugin to handle tab keys when not in lists to add 4 spaces.
     * @constructor
     * @extends {goog.editor.plugins.AbstractTabHandler}
     * @final
     */
    export class SpacesTabHandler extends goog.editor.plugins.AbstractTabHandler {
        constructor();
        
        /** @override */
        getTrogClassId(): void;
        
        /** @override */
        handleTabKey(): void;
    }
}
