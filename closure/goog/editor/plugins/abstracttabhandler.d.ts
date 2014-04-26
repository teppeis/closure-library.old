declare module goog.editor.plugins {

    /**
     * Plugin to handle tab keys. Specific tab behavior defined by subclasses.
     *
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    export class AbstractTabHandler extends goog.editor.Plugin {
        constructor();
        
        /** @override */
        getTrogClassId: any;
        
        /** @override */
        handleKeyboardShortcut(): void;
        
        /**
         * Handle a tab key press.
         * @param {goog.events.Event} e The key event.
         * @return {boolean} Whether this event was handled by this plugin.
         * @protected
         */
        handleTabKey(e: goog.events.Event): boolean;
    }
}
