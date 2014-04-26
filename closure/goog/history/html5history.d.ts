declare module goog.history {

    /**
     * An implementation compatible with goog.History that uses the HTML5
     * history APIs.
     *
     * @param {Window=} opt_win The window to listen/dispatch history events on.
     * @param {goog.history.Html5History.TokenTransformer=} opt_transformer
     *     The token transformer that is used to create URL from the token
     *     when storing token without using hash fragment.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    export class Html5History extends goog.events.EventTarget {
        constructor(opt_win?: Window, opt_transformer?: goog.history.Html5History.TokenTransformer);
        
        /**
         * Returns whether Html5History is supported.
         * @param {Window=} opt_win Optional window to check.
         * @return {boolean} Whether html5 history is supported.
         */
        static isSupported(opt_win?: Window): boolean;
        
        /**
         * Starts or stops the History.  When enabled, the History object
         * will immediately fire an event for the current location. The caller can set
         * up event listeners between the call to the constructor and the call to
         * setEnabled.
         *
         * @param {boolean} enable Whether to enable history.
         */
        setEnabled(enable: boolean): void;
        
        /**
         * Returns the current token.
         * @return {string} The current token.
         */
        getToken(): string;
        
        /**
         * Sets the history state.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title to associate with history entry.
         */
        setToken(token: string, opt_title?: string): void;
        
        /**
         * Replaces the current history state without affecting the rest of the history
         * stack.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title to associate with history entry.
         */
        replaceToken(token: string, opt_title?: string): void;
        
        /**
         * Sets whether to use the fragment to store tokens.
         * @param {boolean} useFragment Whether to use the fragment.
         */
        setUseFragment(useFragment: boolean): void;
        
        /**
         * Sets the path prefix to use if storing tokens in the path. The path
         * prefix should start and end with slash.
         * @param {string} pathPrefix Sets the path prefix.
         */
        setPathPrefix(pathPrefix: string): void;
        
        /**
         * Gets the path prefix.
         * @return {string} The path prefix.
         */
        getPathPrefix(): string;
        
        /**
         * A token transformer that can create a URL from a history
         * token. This is used by {@code goog.history.Html5History} to create
         * URL when storing token without the hash fragment.
         *
         * Given a {@code window.location} object containing the location
         * created by {@code createUrl}, the token transformer allows
         * retrieval of the token back via {@code retrieveToken}.
         *
         * @interface
         */
        static TokenTransformer(): void;
    }
}
