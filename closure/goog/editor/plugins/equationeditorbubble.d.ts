declare module goog.editor.plugins.equation {

    /**
     * Property bubble plugin for equations.
     *
     * @constructor
     * @extends {goog.editor.plugins.AbstractBubblePlugin}
     * @final
     */
    export class EquationBubble extends goog.editor.plugins.AbstractBubblePlugin {
        constructor();
        
        /** @override */
        getTrogClassId(): void;
        
        /** @override */
        getBubbleTargetFromSelection(): void;
        
        /** @override */
        createBubbleContents(): void;
        
        /** @override */
        getBubbleType(): void;
        
        /** @override */
        getBubbleTitle(): void;
    }
}
