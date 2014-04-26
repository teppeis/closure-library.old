declare module goog.dom {

    /**
     * Creates a new multi range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     */
    export class AbstractMultiRange extends goog.dom.AbstractRange {
        constructor();
        
        /** @override */
        containsRange(): void;
        
        /** @override */
        insertNode(): void;
        
        /** @override */
        surroundWithNodes(): void;
    }
}
