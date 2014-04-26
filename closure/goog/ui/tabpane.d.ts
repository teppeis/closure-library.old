declare module goog.ui {

    /**
     * Enum for representing the location of the tabs in relation to the content.
     *
     * @enum {number}
     */
    export interface TabLocation {
        TOP: number;
        BOTTOM: number;
        LEFT: number;
        RIGHT: number;
    }

    /**
     * TabPane widget. All children already inside the tab pane container element
     * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
     * TabPage object. Further pages can be constructed either from an existing
     * container or created from scratch.
     *
     * @param {Element} el Container element to create the tab pane out of.
     * @param {goog.ui.TabPane.TabLocation=} opt_tabLocation Location of the tabs
     *     in relation to the content container. Default is top.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {boolean=} opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK
     *     for tab changes.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @see ../demos/tabpane.html
     * @deprecated Use goog.ui.TabBar instead.
     */
    export class TabPane extends goog.events.EventTarget {
        constructor(el: Element, opt_tabLocation?: goog.ui.TabPane.TabLocation, opt_domHelper?: goog.dom.DomHelper, opt_useMouseDown?: boolean);
        
        /**
         * Constants for event names
         *
         * @type {Object}
         */
        static Events: Object;
        
        /** @override */
        disposeInternal(): void;
        
        /**
         * Adds a page to the tab pane.
         *
         * @param {goog.ui.TabPane.TabPage} page Tab page to add.
         * @param {number=} opt_index Zero based index to insert tab at. Inserted at the
         *                           end if not specified.
         */
        addPage(page: goog.ui.TabPane.TabPage, opt_index?: number): void;
        
        /**
         * Removes the specified page from the tab pane.
         *
         * @param {goog.ui.TabPane.TabPage|number} page Reference to tab page or zero
         *     based index.
         */
        removePage(page: goog.ui.TabPane.TabPage): void;
        
        /**
         * Gets the tab page by zero based index.
         *
         * @param {number} index Index of page to return.
         * @return {goog.ui.TabPane.TabPage?} page The tab page.
         */
        getPage(index: number): goog.ui.TabPane.TabPage;
        
        /**
         * Sets the selected tab page by object reference.
         *
         * @param {goog.ui.TabPane.TabPage} page Tab page to select.
         */
        setSelectedPage(page: goog.ui.TabPane.TabPage): void;
        
        /**
         * Sets the selected tab page by zero based index.
         *
         * @param {number} index Index of page to select.
         */
        setSelectedIndex(index: number): void;
        
        /**
         * @return {number} The index for the selected tab page or -1 if no page is
         *     selected.
         */
        getSelectedIndex(): number;
        
        /**
         * @return {goog.ui.TabPane.TabPage?} The selected tab page.
         */
        getSelectedPage(): goog.ui.TabPane.TabPage;
        
        /**
         * @return {Element} The element that contains the tab pages.
         */
        getContentElement(): Element;
        
        /**
         * @return {Element} The main element for the tabpane.
         */
        getElement(): Element;
    }

    /**
     * Object representing an individual tab pane.
     *
     * @param {Element=} opt_el Container element to create the pane out of.
     * @param {(Element|string)=} opt_title Pane title or element to use as the
     *     title. If not specified the first element in the container is used as
     *     the title.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper
     * The first parameter can be omitted.
     * @constructor
     */
    export class TabPage {
        constructor(opt_el?: Element, opt_title?: Element, opt_domHelper?: goog.dom.DomHelper);
    }

    /**
     * Object representing a tab pane page changed event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.TabPane} target Tab widget initiating event.
     * @param {goog.ui.TabPane.TabPage} page Selected page in tab pane.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    export class TabPaneEvent extends goog.events.Event {
        constructor(type: string, target: goog.ui.TabPane, page: goog.ui.TabPane.TabPage);
    }
}
