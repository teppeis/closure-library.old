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

declare module goog.testing.MockRange {

    /**
     * Concrete subclass of goog.dom.AbstractRange that simply sets the abstract
     * method __iterator__ to undefined so that javascript defaults to iterating
     * through all of the object's properties.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     * @private
     */
    export interface ConcreteRange_ extends goog.dom.AbstractRange {
        
        /**
         * Undefine the iterator so the mock framework can loop through this class'
         * properties.
         * @override
         */
        __iterator__: any;
    }
}
