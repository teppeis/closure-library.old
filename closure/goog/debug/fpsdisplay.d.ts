declare module goog.debug {

    /**
     * Displays frames per seconds that the window this component is
     * rendered in is animating at.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper An optional dom helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    export class FpsDisplay extends goog.ui.Component {
        constructor(opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * CSS class for the FPS display.
         */
        static CSS: any;
        
        /**
         * The number of samples per FPS report.
         */
        static SAMPLES: any;
        
        /** @override */
        createDom(): void;
        
        /** @override */
        enterDocument(): void;
        
        /** @override */
        exitDocument(): void;
        
        /**
         * @return {number} The average frames per second.
         */
        getFps(): number;
    }
}
