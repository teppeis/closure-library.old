declare module goog.ui.equation {

    /**
     * Constants for event names.
     * @enum {string}
     */
    export interface EventType {
        CHANGE: string;
    }

    /**
     * User interface for equation editor plugin.
     * @constructor
     * @param {Object} context The context that this equation editor runs in.
     * @param {goog.dom.DomHelper=} opt_domHelper DomHelper to use.
     * @param {string=} opt_helpUrl Help document URL to use in the "Learn more"
     *     link.
     * @extends {goog.ui.Component}
     * @final
     */
    export class EquationEditor extends goog.ui.Component {
        constructor(context: Object, opt_domHelper?: goog.dom.DomHelper, opt_helpUrl?: string);
        
        /**
         * Sets the visibility of the editor.
         * @param {boolean} visible Whether the editor should be visible.
         */
        setVisible(visible: boolean): void;
        
        /**
         * Returns the encoded equation.
         * @return {string} The encoded equation.
         */
        getEquation(): string;
        
        /**
         * @return {string} The html code to embed in the document.
         */
        getHtml(): string;
        
        /**
         * Checks whether the current equation is valid and can be used in a document.
         * @return {boolean} Whether the equation is valid.
         */
        isValid(): boolean;
        
        /**
         * Parse an equation and draw it.
         * Clears any previous displayed equation.
         * @param {string} equation The equation text to parse.
         */
        setEquation(equation: string): void;
    }
}
