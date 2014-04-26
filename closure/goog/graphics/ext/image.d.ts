declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics image element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {string} src The path to the image to display.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     * @final
     */
    export class Image extends goog.graphics.ext.Element {
        constructor(group: goog.graphics.ext.Group, src: string);
        
        /**
         * Redraw the image.  Called when the coordinate system is changed.
         * @protected
         * @override
         */
        redraw(): void;
        
        /**
         * Update the source of the image.
         * @param {string} src  Source of the image.
         */
        setSource(src: string): void;
    }
}
