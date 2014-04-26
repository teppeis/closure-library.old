declare module goog {

    /**
     * Provides a more strict interface for Thenables in terms of
     * http://promisesaplus.com for interop with {@see goog.Promise}.
     *
     * @interface
     * @extends {IThenable.<TYPE>}
     * @template TYPE
     */
    export function Thenable<TYPE>(): void;
}

declare module goog.Thenable {

    /**
     * An expando property to indicate that an object implements
     * {@code goog.Thenable}.
     *
     * {@see addImplementation}.
     *
     * @const
     */
    export var IMPLEMENTED_BY_PROP: any;

    /**
     * Marks a given class (constructor) as an implementation of Thenable, so
     * that we can query that fact at runtime. The class must have already
     * implemented the interface.
     * Exports a 'then' method on the constructor prototype, so that the objects
     * also implement the extern {@see goog.Thenable} interface for interop with
     * other Promise implementations.
     * @param {function(new:goog.Thenable,...[?])} ctor The class constructor. The
     *     corresponding class must have already implemented the interface.
     */
    export function addImplementation(ctor: any): void;

    /**
     * @param {*} object
     * @return {boolean} Whether a given instance implements {@code goog.Thenable}.
     *     The class/superclass of the instance must call {@code addImplementation}.
     */
    export function isImplementedBy(object: any): boolean;
}
