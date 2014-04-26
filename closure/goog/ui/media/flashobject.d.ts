declare module goog.ui.media {

    /**
     * The different modes for displaying a SWF. Note that different wmodes
     * can result in different bugs in different browsers and also that
     * both OPAQUE and TRANSPARENT will result in a performance hit.
     *
     * @enum {string}
     */
    export interface Wmodes {
        OPAQUE: string;
        TRANSPARENT: string;
        WINDOW: string;
    }

    /**
     * The different levels of allowScriptAccess.
     *
     * Talked about at:
     * http://kb2.adobe.com/cps/164/tn_16494.html
     *
     * @enum {string}
     */
    export interface ScriptAccessLevel {
        ALWAYS: string;
        SAME_DOMAIN: string;
        NEVER: string;
    }

    /**
     * A very simple flash wrapper, that allows you to create flash object
     * programmatically, instead of embedding your own HTML. It extends
     * {@link goog.ui.Component}, which makes it very easy to be embedded on the
     * page.
     *
     * @param {string} flashUrl The flash SWF URL.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DomHelper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    export class FlashObject extends goog.ui.Component {
        constructor(flashUrl: string, opt_domHelper?: goog.dom.DomHelper);
        
        /**
         * The component CSS namespace.
         *
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * The flash object CSS class.
         *
         * @type {string}
         */
        static FLASH_CSS_CLASS: string;
        
        /**
         * Sets the flash movie Wmode.
         *
         * @param {goog.ui.media.FlashObject.Wmodes} wmode the flash movie Wmode.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setWmode(wmode: goog.ui.media.FlashObject.Wmodes): goog.ui.media.FlashObject;
        
        /**
         * @return {string} Returns the flash movie wmode.
         */
        getWmode(): string;
        
        /**
         * Adds flash variables.
         *
         * @param {goog.structs.Map|Object} map A key-value map of variables.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        addFlashVars(map: goog.structs.Map): goog.ui.media.FlashObject;
        
        /**
         * Sets a flash variable.
         *
         * @param {string} key The name of the flash variable.
         * @param {string} value The value of the flash variable.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setFlashVar(key: string, value: string): goog.ui.media.FlashObject;
        
        /**
         * Sets flash variables. You can either pass a Map of key->value pairs or you
         * can pass a key, value pair to set a specific variable.
         *
         * TODO(user, martino): Get rid of this method.
         *
         * @deprecated Use {@link #addFlashVars} or {@link #setFlashVar} instead.
         * @param {goog.structs.Map|Object|string} flashVar A map of variables (given
         *    as a goog.structs.Map or an Object literal) or a key to the optional
         *    {@code opt_value}.
         * @param {string=} opt_value The optional value for the flashVar key.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setFlashVars(flashVar: goog.structs.Map, opt_value?: string): goog.ui.media.FlashObject;
        
        /**
         * @return {goog.structs.Map} The current flash variables.
         */
        getFlashVars(): goog.structs.Map;
        
        /**
         * Sets the background color of the movie.
         *
         * @param {string} color The new color to be set.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setBackgroundColor(color: string): goog.ui.media.FlashObject;
        
        /**
         * @return {string} The background color of the movie.
         */
        getBackgroundColor(): string;
        
        /**
         * Sets the allowScriptAccess setting of the movie.
         *
         * @param {string} value The new value to be set.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setAllowScriptAccess(value: string): goog.ui.media.FlashObject;
        
        /**
         * @return {string} The allowScriptAccess setting color of the movie.
         */
        getAllowScriptAccess(): string;
        
        /**
         * Sets the width and height of the movie.
         *
         * @param {number|string} width The width of the movie.
         * @param {number|string} height The height of the movie.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setSize(width: number, height: number): goog.ui.media.FlashObject;
        
        /**
         * @return {?string} The flash required version.
         */
        getRequiredVersion(): string;
        
        /**
         * Sets the minimum flash required version.
         *
         * @param {?string} version The minimum required version for this movie to work,
         *     or null if you want to unset it.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setRequiredVersion(version: string): goog.ui.media.FlashObject;
        
        /**
         * Returns whether this SWF has a minimum required flash version.
         *
         * @return {boolean} Whether a required version was set or not.
         */
        hasRequiredVersion(): boolean;
        
        /**
         * Writes the Flash embedding {@code HTMLObjectElement} to this components root
         * element and adds listeners for all events to handle them consistently.
         * @override
         */
        enterDocument(): void;
        
        /**
         * Creates the DOM structure.
         *
         * @override
         */
        createDom(): void;
        
        /**
         * @return {HTMLObjectElement} The flash element or null if the element can't
         *     be found.
         */
        getFlashElement(): HTMLObjectElement;
        
        /** @override */
        disposeInternal(): void;
        
        /**
         * @return {boolean} whether the SWF has finished loading or not.
         */
        isLoaded(): boolean;
    }
}
