declare module goog.ui {

    /**
     * Plain text spell checker implementation.
     *
     * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
     *     support object to use. A single instance can be shared by multiple
     *     editor components.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.AbstractSpellChecker}
     * @final
     */
    export class PlainTextSpellChecker extends goog.ui.AbstractSpellChecker {
        constructor(handler: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Class name for invalid words.
         * @type {string}
         */
        invalidWordClassName: string;
        
        /**
         * Class name for corrected words.
         * @type {string}
         */
        correctedWordClassName: string;
        
        /**
         * Class name for correction pane.
         * @type {string}
         */
        correctionPaneClassName: string;
        
        /**
         * Creates the initial DOM representation for the component.
         * @override
         */
        createDom(): void;
        
        /** @override */
        enterDocument(): void;
        
        /** @override */
        exitDocument(): void;
        
        /**
         * Initializes suggestions menu. Populates menu with separator and ignore option
         * that are always valid. Suggestions are later added above the separator.
         * @override
         */
        initSuggestionsMenu(): void;
        
        /**
         * Checks spelling for all text and displays correction UI.
         * @override
         */
        check(): void;
        
        /**
         * Processes word.
         *
         * @param {Node} node Node containing word.
         * @param {string} word Word to process.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @override
         */
        processWord(node: Node, word: string, status: goog.spell.SpellCheck.WordStatus): void;
        
        /**
         * Processes range of text - recognized words and separators.
         *
         * @param {Node} node Node containing separator.
         * @param {string} text text to process.
         * @override
         */
        processRange(node: Node, text: string): void;
        
        /**
         * Hides correction UI.
         * @override
         */
        resume(): void;
        
        /**
         * Returns desired element properties for the specified status.
         *
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @return {!Object} Properties to apply to word element.
         * @override
         */
        getElementProperties(status: goog.spell.SpellCheck.WordStatus): Object;
        
        /** @override */
        disposeInternal(): void;
        
        /**
         * Handles key down for overlay.
         * @param {goog.events.BrowserEvent} e The browser event.
         * @return {boolean|undefined} The handled value.
         */
        handleOverlayKeyEvent(e: goog.events.BrowserEvent): boolean;
        
        /**
         * Handles correction menu actions.
         *
         * @param {goog.events.Event} event Action event.
         * @override
         */
        onCorrectionAction(event: goog.events.Event): void;
    }
}
