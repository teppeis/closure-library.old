declare module goog.testing {

    /**
     * LooseMock of goog.dom.AbstractRange. Useful because the mock framework cannot
     * simply create a mock out of an abstract class, and cannot create a mock out
     * of classes that implements __iterator__ because it relies on the default
     * behavior of iterating through all of an object's properties.
     * @constructor
     * @extends {goog.testing.LooseMock}
     * @final
     */
    export class MockRange extends goog.testing.LooseMock {
        constructor();
    }
}
