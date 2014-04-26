declare module goog.dom {

    /**
     * Creates a new multi part range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractMultiRange}
     * @final
     */
    export class MultiRange extends goog.dom.AbstractMultiRange {
        constructor();
        
        /**
         * Creates a new range wrapper from the given browser selection object.  Do not
         * use this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Selection} selection The browser selection object.
         * @return {!goog.dom.MultiRange} A range wrapper object.
         */
        static createFromBrowserSelection(selection: Selection): goog.dom.MultiRange;
        
        /**
         * Creates a new range wrapper from the given browser ranges.  Do not
         * use this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Array.<Range>} browserRanges The browser ranges.
         * @return {!goog.dom.MultiRange} A range wrapper object.
         */
        static createFromBrowserRanges(browserRanges: Array<Range>): goog.dom.MultiRange;
        
        /**
         * Creates a new range wrapper from the given goog.dom.TextRange objects.  Do
         * not use this method directly - please use goog.dom.Range.createFrom* instead.
         * @param {Array.<goog.dom.TextRange>} textRanges The text range objects.
         * @return {!goog.dom.MultiRange} A range wrapper object.
         */
        static createFromTextRanges(textRanges: Array<goog.dom.TextRange>): goog.dom.MultiRange;
        
        /**
         * @return {goog.dom.MultiRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.MultiRange;
        
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
        
        /**
         * @return {!Array.<goog.dom.TextRange>} An array of sub-ranges, sorted by start
         *     point.
         */
        getSortedRanges(): Array<goog.dom.TextRange>;
        
        /** @override */
        getStartNode(): void;
        
        /** @override */
        getStartOffset(): void;
        
        /** @override */
        getEndNode(): void;
        
        /** @override */
        getEndOffset(): void;
        
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
        getPastableHtml(): void;
        
        /** @override */
        __iterator__(): void;
        
        /** @override */
        select(): void;
        
        /** @override */
        removeContents(): void;
        
        /** @override */
        saveUsingDom(): void;
        
        /**
         * Collapses this range to a single point, either the first or last point
         * depending on the parameter.  This will result in the number of ranges in this
         * multi range becoming 1.
         * @param {boolean} toAnchor Whether to collapse to the anchor.
         * @override
         */
        collapse(toAnchor: boolean): void;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {goog.dom.MultiRange} range The range to traverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    export class MultiRangeIterator extends goog.dom.RangeIterator {
        constructor(range: goog.dom.MultiRange);
        
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
        
        /** @override */
        next(): void;
        
        /** @override */
        copyFrom(): void;
        
        /**
         * @return {!goog.dom.MultiRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.MultiRangeIterator;
    }
}
