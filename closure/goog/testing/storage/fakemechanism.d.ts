declare module goog.testing.storage {

    /**
     * Creates a fake iterable mechanism.
     *
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    export class FakeMechanism extends goog.storage.mechanism.IterableMechanism {
        constructor();
        
        /** @override */
        set(): void;
        
        /** @override */
        get(): void;
        
        /** @override */
        remove(): void;
        
        /** @override */
        __iterator__(): void;
    }
}
