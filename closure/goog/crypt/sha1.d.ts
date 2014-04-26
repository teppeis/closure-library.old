declare module goog.crypt {

    /**
     * SHA-1 cryptographic hash constructor.
     *
     * The properties declared here are discussed in the above algorithm document.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @final
     * @struct
     */
    export class Sha1 extends goog.crypt.Hash {
        constructor();
        
        /** @override */
        reset(): void;
        
        /** @override */
        update(): void;
        
        /** @override */
        digest(): void;
    }
}
