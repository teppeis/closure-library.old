declare module goog.ui {

    /**
     * Class representing a three state checkbox menu item.
     *
     * @param {goog.ui.ControlContent} content Text caption or DOM structure
     *     to display as the content of the item (use to add icons or styling to
     *     menus).
     * @param {Object=} opt_model Data/model associated with the menu item.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper used for
     *     document interactions.
     * @param {goog.ui.MenuItemRenderer=} opt_renderer Optional renderer.
     * @param {boolean=} opt_alwaysAllowPartial  If true, always allow partial
     *     state.
     * @constructor
     * @extends {goog.ui.MenuItem}
     * TODO(attila): Figure out how to better integrate this into the
     * goog.ui.Control state management framework.
     * @final
     */
    export class TriStateMenuItem extends goog.ui.MenuItem {
        constructor(content: goog.ui.ControlContent, opt_model?: Object, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.MenuItemRenderer, opt_alwaysAllowPartial?: boolean);
        
        /**
         * @return {goog.ui.TriStateMenuItem.State} The menu item's check state.
         */
        getCheckedState(): goog.ui.TriStateMenuItem.State;
        
        /**
         * Sets the checked state.
         * @param {goog.ui.TriStateMenuItem.State} state The checked state.
         */
        setCheckedState(state: goog.ui.TriStateMenuItem.State): void;
    }
}

declare module goog.ui.TriStateMenuItem {

    /**
     * Checked states for component.
     * @enum {number}
     */
    export interface State {
        NOT_CHECKED: number;
        PARTIALLY_CHECKED: number;
        FULLY_CHECKED: number;
    }
}
