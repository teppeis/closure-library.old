declare module goog.structs {

    /**
     * Class for Priority Queue datastructure.
     *
     * @constructor
     * @extends {goog.structs.Heap.<number, VALUE>}
     * @template VALUE
     * @final
     */
    export class PriorityQueue extends goog.structs.Heap<number, VALUE> {
        constructor();
        
        /**
         * Puts the specified value in the queue.
         * @param {number} priority The priority of the value. A smaller value here
         *     means a higher priority.
         * @param {VALUE} value The value.
         */
        enqueue(priority: number, value: VALUE): void;
        
        /**
         * Retrieves and removes the head of this queue.
         * @return {VALUE} The element at the head of this queue. Returns undefined if
         *     the queue is empty.
         */
        dequeue(): VALUE;
    }
}
