declare module goog.tweak {

    /**
     * A UI for editing tweak settings / clicking tweak actions.
     * @param {!goog.tweak.Registry} registry The registry to render.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @constructor
     * @final
     */
    export class TweakUi {
        constructor(registry: goog.tweak.Registry, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Creates a TweakUi if tweaks are enabled.
         * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
         * @return {!Element|undefined} The root UI element or undefined if tweaks are
         *     not enabled.
         */
        static create(opt_domHelper?: goog.dom.DomHelper): Element;
        
        /**
         * Creates a TweakUi inside of a show/hide link.
         * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
         * @return {!Element|undefined} The root UI element or undefined if tweaks are
         *     not enabled.
         */
        static createCollapsible(opt_domHelper?: goog.dom.DomHelper): Element;
        
        /**
         * @return {!Element} The root element. Must not be called before render().
         */
        getRootElement(): Element;
        
        /**
         * Creates the element to display when the UI is visible.
         * @return {!Element} The root element.
         */
        render(): Element;
    }

    /**
     * The body of the tweaks UI and also used for BooleanGroup.
     * @param {!Array.<!goog.tweak.BaseEntry>} entries The entries to show in the
     *     panel.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @constructor
     * @final
     */
    export class EntriesPanel {
        constructor(entries: Array<goog.tweak.BaseEntry>, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * @return {!Element} Returns the expanded element. Must not be called before
         *     render().
         */
        getRootElement(): Element;
        
        /**
         * Creates and returns the expanded element.
         * The markup looks like:
         * <div>
         *   <a>Show Descriptions</a>
         *   <div>
         *      ...
         *      {endElement}
         *   </div>
         * </div>
         * @param {Element|DocumentFragment=} opt_endElement Element to insert after all
         *     tweak entries.
         * @return {!Element} The root element for the panel.
         */
        render(opt_endElement?: Element): Element;
        
        /**
         * Inserts the given entry into the panel.
         * @param {!goog.tweak.BaseEntry} entry The entry to insert.
         */
        insertEntry(entry: goog.tweak.BaseEntry): void;
        
        /**
         * Show all entry descriptions (has the same effect as clicking on all ?'s).
         */
        toggleAllDescriptions(): void;
    }
}

declare module goog.tweak.NamespaceEntry_ {

    /**
     * Prefix for the IDs of namespace entries used to ensure that they do not
     * conflict with regular entries.
     * @type {string}
     */
    export var ID_PREFIX: string;
}
