declare module goog.testing {

    /**
     * Constructs a test case that supports tests with continuations. Test functions
     * may issue "wait" commands that suspend the test temporarily and continue once
     * the wait condition is met.
     *
     * @param {string=} opt_name Optional name for the test case.
     * @constructor
     * @extends {goog.testing.TestCase}
     * @final
     */
    export class ContinuationTestCase extends goog.testing.TestCase {
        constructor(opt_name?: string);
        
        /**
         * The default maximum time to wait for a single test step in milliseconds.
         * @type {number}
         */
        static MAX_TIMEOUT: number;
        
        /** @override */
        runTests(): void;
        
        /** @override */
        finalize(): void;
        
        /** @override */
        cycleTests(): void;
        
        /**
         * Creates a new test step that will run after a user-specified
         * timeout.  No guarantee is made on the execution order of the
         * continuation, except for those provided by each browser's
         * window.setTimeout. In particular, if two continuations are
         * registered at the same time with very small delta for their
         * durations, this class can not guarantee that the continuation with
         * the smaller duration will be executed first.
         * @param {Function} continuation The test function to invoke after the timeout.
         * @param {number=} opt_duration The length of the timeout in milliseconds.
         */
        waitForTimeout(continuation: Function, opt_duration?: number): void;
        
        /**
         * Creates a new test step that will run after an event has fired. If the event
         * does not fire within a reasonable timeout, the test will fail.
         * @param {goog.events.EventTarget|EventTarget} eventTarget The target that will
         *     fire the event.
         * @param {string} eventType The type of event to listen for.
         * @param {Function} continuation The test function to invoke after the event
         *     fires.
         */
        waitForEvent(eventTarget: goog.events.EventTarget, eventType: string, continuation: Function): void;
        
        /**
         * Creates a new test step which will run once a condition becomes true. The
         * condition will be polled at a user-specified interval until it becomes true,
         * or until a maximum timeout is reached.
         * @param {Function} condition The condition to poll.
         * @param {Function} continuation The test code to evaluate once the condition
         *     becomes true.
         * @param {number=} opt_interval The polling interval in milliseconds.
         * @param {number=} opt_maxTimeout The maximum amount of time to wait for the
         *     condition in milliseconds (defaults to 1000).
         */
        waitForCondition(condition: Function, continuation: Function, opt_interval?: number, opt_maxTimeout?: number): void;
    }

    /**
     * Creates a continuation test case, which consists of multiple test steps that
     * occur in several phases.
     *
     * The steps are distributed between setUp, test, and tearDown phases. During
     * the execution of each step, 0 or more steps may be added to the current
     * phase. Once all steps in a phase have completed, the next phase will be
     * executed.
     *
     * If any errors occur (such as an assertion failure), the setUp and Test phases
     * will be cancelled immediately. The tearDown phase will always start, but may
     * be cancelled as well if it raises an error.
     *
     * @param {goog.testing.TestCase.Test} setUp A setUp test method to run before
     *     the main test phase.
     * @param {goog.testing.TestCase.Test} test A test method to run.
     * @param {goog.testing.TestCase.Test} tearDown A tearDown test method to run
     *     after the test method completes or fails.
     * @constructor
     * @extends {goog.testing.TestCase.Test}
     * @final
     */
    export class Test extends goog.testing.TestCase.Test {
        constructor(setUp: goog.testing.TestCase.Test, test: goog.testing.TestCase.Test, tearDown: goog.testing.TestCase.Test);
    }

    /**
     * Constructs a single step in a larger continuation test. Each step is similar
     * to a typical TestCase test, except it may wait for an event or timeout to
     * occur before running the test function.
     *
     * @param {string} name The test name.
     * @param {Function} ref The test function to run.
     * @param {Object=} opt_scope The object context to run the test in.
     * @constructor
     * @extends {goog.testing.TestCase.Test}
     * @final
     */
    export class Step extends goog.testing.TestCase.Test {
        constructor(name: string, ref: Function, opt_scope?: Object);
    }
}
