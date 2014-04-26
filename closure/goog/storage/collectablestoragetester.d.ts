declare module goog.storage.collectableStorageTester {

    /**
     * Tests basic operation: expiration and collection of collectable storage.
     *
     * @param {goog.storage.mechanism.IterableMechanism} mechanism
     * @param {goog.testing.MockClock} clock
     * @param {goog.storage.CollectableStorage} storage
      */
    export function runBasicTests(mechanism: goog.storage.mechanism.IterableMechanism, clock: goog.testing.MockClock, storage: goog.storage.CollectableStorage): void;
}
