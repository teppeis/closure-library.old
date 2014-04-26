declare module goog.dom {

    /**
     * Create a new control selection with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractMultiRange}
     * @final
     */
    export class ControlRange extends goog.dom.AbstractMultiRange {
        constructor();
        
        /** @override */
        getPastableHtml: any;
        
        /**
         * Create a new range wrapper from the given browser range object.  Do not use
         * this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Object} controlRange The browser range object.
         * @return {!goog.dom.ControlRange} A range wrapper object.
         */
        static createFromBrowserRange(controlRange: Object): goog.dom.ControlRange;
        
        /**
         * Create a new range wrapper that selects the given element.  Do not use
         * this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {...Element} var_args The element(s) to select.
         * @return {goog.dom.ControlRange} A range wrapper object.
         */
        static createFromElements(...var_args: Element[]): goog.dom.ControlRange;
        
        /** @override */
        clone(): void;
        
        /** @override */
        getType(): void;
        
        /** @override */
        getBrowserRangeObject(): void;
        
        /** @override */
        setBrowserRangeObject(): void;
        
        /** @override */
        getTextRangeCount(): void;
        
        /** @override */
        getTextRange(): void;
        
        /** @override */
        getContainer(): void;
        
        /** @override */
        getStartNode(): void;
        
        /** @override */
        getStartOffset(): void;
        
        /** @override */
        getEndNode(): void;
        
        /** @override */
        getEndOffset(): void;
        
        /**
         * @return {!Array.<Element>} Array of elements in the control range.
         */
        getElements(): Array<Element>;
        
        /**
         * @return {!Array.<Element>} Array of elements comprising the control range,
         *     sorted by document order.
         */
        getSortedElements(): Array<Element>;
        
        /** @override */
        isRangeInDocument(): void;
        
        /** @override */
        isCollapsed(): void;
        
        /** @override */
        getText(): void;
        
        /** @override */
        getHtmlFragment(): void;
        
        /** @override */
        getValidHtml(): void;
        
        /** @override */
        __iterator__(): void;
        
        /** @override */
        select(): void;
        
        /** @override */
        removeContents(): void;
        
        /** @override */
        replaceContentsWithNode(): void;
        
        /** @override */
        saveUsingDom(): void;
        
        /** @override */
        collapse(): void;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {goog.dom.ControlRange?} range The range to traverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    export class ControlRangeIterator extends goog.dom.RangeIterator {
        constructor(range: goog.dom.ControlRange);
        
        /** @override */
        getStartTextOffset(): void;
        
        /** @override */
        getEndTextOffset(): void;
        
        /** @override */
        getStartNode(): void;
        
        /** @override */
        getEndNode(): void;
        
        /** @override */
        isLast(): void;
        
        /**
         * Move to the next position in the selection.
         * Throws {@code goog.iter.StopIteration} when it passes the end of the range.
         * @return {Node} The node at the next position.
         * @override
         */
        next(): Node;
        
        /** @override */
        copyFrom(): void;
        
        /**
         * @return {!goog.dom.ControlRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.ControlRangeIterator;
    }
}
