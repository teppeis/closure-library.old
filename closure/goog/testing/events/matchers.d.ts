declare module goog.testing.events {

    /**
     * A matcher that verifies that an argument is a {@code goog.events.Event} of a
     * particular type.
     * @param {string} type The single type the event argument must be of.
     * @constructor
     * @extends {goog.testing.mockmatchers.ArgumentMatcher}
     * @final
     */
    export class EventMatcher extends goog.testing.mockmatchers.ArgumentMatcher {
        constructor(type: string);
    }
}
