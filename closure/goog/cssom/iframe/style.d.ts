declare module goog.cssom.iframe.style {

    /**
     * Throw away all cached dom information. Call this if you've modified
     * the structure or class/id attributes of your document and you want
     * to recalculate the currently applied CSS rules.
     */
    export function resetDomCache(): void;

    /**
     * Reads the current css rules from element's document, and returns them
     * rewriting selectors so that any rules that formerly applied to element will
     * be applied to doc.body. This makes it possible to replace a block in a page
     * with an iframe and preserve the css styling of the contents.
     *
     * @param {Element} element The element for which context should be calculated.
     * @param {boolean=} opt_forceRuleSetCacheUpdate Flag to force the internal
     *     cache of rulesets to refresh itself before we read the same.
     * @param {boolean=} opt_copyBackgroundContext Flag indicating that if the
     *     {@code element} has a transparent background, background rules
     *     from the nearest ancestor element(s) that have background-color
     *     and/or background-image set should be copied.
     * @return {string} String containing all CSS rules present in the original
     *     document, with modified selectors.
     * @see goog.cssom.iframe.style.getBackgroundContext.
     */
    export function getElementContext(element: Element, opt_forceRuleSetCacheUpdate?: boolean, opt_copyBackgroundContext?: boolean): string;

    /**
     * Generates a set of CSS properties that can be used to make another
     * element's background look like the background of a given element.
     * This is useful when you want to copy the CSS context of an element,
     * but the element's background is transparent. In the original context
     * you would see the ancestor's backround color/image showing through,
     * but in the new context there might be a something different underneath.
     * Note that this assumes the element you're copying context from has a
     * fairly standard positioning/layout - it assumes that when the element
     * has a transparent background what you're going to see through it is its
     * ancestors.
     * @param {Element} element The element from which to copy background styles.
     * @return {!Object} Object containing background* properties.
     */
    export function getBackgroundContext(element: Element): Object;
}

declare module goog.cssom.iframe.style.ruleSetCache_ {

    /**
     * Loads ruleset definitions from a document. If the cache already
     * has rulesets for this document the cached version will be replaced.
     * @param {Document} doc The document from which to load rulesets.
     */
    export function loadRuleSetsForDocument(doc: Document): void;

    /**
     * Retrieves the array of css rulesets for this document. A cached
     * version will be used when possible.
     * @param {Document} doc The document for which to get rulesets.
     * @return {!Array.<goog.cssom.iframe.style.CssRuleSet_>} An array of CssRuleSet
     *     objects representing the css rule sets in the supplied document.
     */
    export function getRuleSetsForDocument(doc: Document): Array<goog.cssom.iframe.style.CssRuleSet_>;
}
