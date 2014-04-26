declare module goog.editor.plugins {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    export interface COMMAND {
        UNDO: string;
        REDO: string;
    }

    /**
     * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
     * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
     * clobbered on DOM modifications). Also, this allows interleaving non-editing
     * commands into the undo stack via the UndoRedoManager.
     *
     * @param {goog.editor.plugins.UndoRedoManager=} opt_manager An undo redo
     *    manager to be used by this plugin. If none is provided one is created.
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    export class UndoRedo extends goog.editor.Plugin {
        constructor(opt_manager?: goog.editor.plugins.UndoRedoManager);
        
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
        
        /**
         * Set the max undo stack depth (not the real memory usage).
         * @param {number} depth Depth of the stack.
         */
        setMaxUndoDepth(depth: number): void;
        
        /**
         * Set the undo-redo manager used by this plugin. Any state on a previous
         * undo-redo manager is lost.
         * @param {goog.editor.plugins.UndoRedoManager} manager The undo-redo manager.
         */
        setUndoRedoManager(manager: goog.editor.plugins.UndoRedoManager): void;
        
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
        
        /**
         * Unregisters and disables the fieldObject with this plugin. Thie does *not*
         * clobber the undo stack for the fieldObject though.
         * TODO(user): For the multifield version, we really should add a way to
         * ignore undo actions on field's that have been made uneditable.
         * This is probably as simple as skipping over entries in the undo stack
         * that have a hashcode of an uneditable field.
         * @param {goog.editor.Field} fieldObject The field to register with the plugin.
         * @override
         */
        unregisterFieldObject(fieldObject: goog.editor.Field): void;
        
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} The active field object for this field. This is
         *     the one registered field object for the single-plugin case and the
         *     focused field for the multi-field plugin case.
         */
        getCurrentFieldObject(): goog.editor.Field;
        
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @param {string} fieldHashCode The Field's hashcode.
         * @return {goog.editor.Field} The field object with the hashcode.
         */
        getFieldObjectForHash(fieldHashCode: string): goog.editor.Field;
        
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} Target for COMMAND_VALUE_CHANGE events.
         */
        getCurrentEventTarget(): goog.editor.Field;
        
        /**
         * Restores the state of the editable field.
         * @param {goog.editor.plugins.UndoRedo.UndoState_} state The state initiating
         *    the restore.
         * @param {string} content The content to restore.
         * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
         *     The cursor position within the content.
         */
        restoreState(state: goog.editor.plugins.UndoRedo.UndoState_, content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
        
        /**
         * Clear the undo/redo stack.
         */
        clearHistory(): void;
        
        /**
         * Refreshes the current state of the editable field as maintained by undo-redo,
         * without adding any undo-redo states to the stack.
         * @param {goog.editor.Field} fieldObject The editable field.
         */
        refreshCurrentState(fieldObject: goog.editor.Field): void;
    }
}
