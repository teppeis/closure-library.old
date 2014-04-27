declare module goog.editor.plugins {

    /**
     * Plugin that adds support for table creation and editing commands.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    export class TableEditor extends goog.editor.Plugin {
        constructor();
        
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the string corresponds to a command
         *     this plugin handles.
         * @override
         */
        isSupportedCommand(command: string): boolean;
        
        /**
         * Returns the current value of a given command. Currently this plugin
         * only returns a value for goog.editor.plugins.TableEditor.COMMAND.TABLE.
         * @override
         */
        queryCommandValue(): void;
        
        /**
         * Adds a function to filter out non-user-editable tables.
         * @param {function(Element):boolean} func A function to decide whether the
         *   table element could be editable by the user or not.
         */
        addIsTableEditableFunction(func: (arg0: Element) => boolean): void;
    }
}

declare module goog.editor.plugins.TableEditor {

    /**
     * Commands supported by goog.editor.plugins.TableEditor.
     * @enum {string}
     */
    export interface COMMAND {
        TABLE: string;
        INSERT_ROW_AFTER: string;
        INSERT_ROW_BEFORE: string;
        INSERT_COLUMN_AFTER: string;
        INSERT_COLUMN_BEFORE: string;
        REMOVE_ROWS: string;
        REMOVE_COLUMNS: string;
        SPLIT_CELL: string;
        MERGE_CELLS: string;
        REMOVE_TABLE: string;
    }
}
