declare module goog.testing.singleton {

    /**
     * @deprecated Please use {@code goog.addSingletonGetter}.
     */
    export var addSingletonGetter: any;

    /**
     * Deletes all singleton instances, so {@code getInstance} will return a new
     * instance on next call.
     */
    export function reset(): void;
}
