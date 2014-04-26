declare module goog.promise {

    /**
     * Resolver interface for promises. The resolver is a convenience interface that
     * bundles the promise and its associated resolve and reject functions together,
     * for cases where the resolver needs to be persisted internally.
     *
     * @interface
     * @template TYPE
     */
    export function Resolver<TYPE>(): void;
}
