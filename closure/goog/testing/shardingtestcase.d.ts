declare module goog.testing {

    /**
     * A test case that runs tests in per-file shards.
     * @param {number} shardIndex Shard index for this page,
     *     <strong>1-indexed</strong>.
     * @param {number} numShards Number of shards to split up test cases into.
     * @extends {goog.testing.TestCase}
     * @constructor
     * @final
     */
    export class ShardingTestCase extends goog.testing.TestCase {
        constructor(shardIndex: number, numShards: number);
        
        /**
         * Shards tests based on the test filename. Assumes that the filename is
         * formatted like 'foo_1of5_test.html'.
         * @param {string=} opt_name A descriptive name for the test case.
         */
        static shardByFileName(opt_name?: string): void;
    }
}
