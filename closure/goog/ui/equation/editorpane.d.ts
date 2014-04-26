declare module goog.ui.equation {

    /**
     * An abstract equation editor tab pane.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    export class EditorPane extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * Sets the visibility of this tab pane.
         * @param {boolean} visible Whether this tab should become visible.
         */
        setVisible(visible: boolean): void;
        
        /**
         * Sets the equation to show in this tab pane.
         * @param {string} equation The equation.
         */
        setEquation(equation: string): void;
        
        /**
         * @return {string} The equation shown in this tab pane.
         */
        getEquation(): string;
        
        /**
         * Sets the help link URL to show in this tab pane.
         * @param {string} url The help link URL.
         * @protected
         */
        setHelpUrl(url: string): void;
        
        /**
         * @return {string} The help link URL.
         * @protected
         */
        getHelpUrl(): string;
        
        /**
         * @return {boolean} Whether the equation was modified.
         * @protected
         */
        isModified(): boolean;
    }
}
