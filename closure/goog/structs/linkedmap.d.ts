declare module goog.structs {

    /**
     * Class for a LinkedMap datastructure, which combines O(1) map access for
     * key/value pairs with a linked list for a consistent iteration order. Sample
     * usage:
     *
     * <pre>
     * var m = new LinkedMap();
     * m.set('param1', 'A');
     * m.set('param2', 'B');
     * m.set('param3', 'C');
     * alert(m.getKeys()); // param1, param2, param3
     *
     * var c = new LinkedMap(5, true);
     * for (var i = 0; i < 10; i++) {
     *   c.set('entry' + i, false);
     * }
     * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
     *
     * c.set('entry5', true);
     * c.set('entry1', false);
     * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
     * </pre>
     *
     * @param {number=} opt_maxCount The maximum number of objects to store in the
     *     LinkedMap. If unspecified or 0, there is no maximum.
     * @param {boolean=} opt_cache When set, the LinkedMap stores items in order
     *     from most recently used to least recently used, instead of insertion
     *     order.
     * @constructor
     * @template KEY, VALUE
     */
    export class LinkedMap {
        constructor(opt_maxCount?: number, opt_cache?: boolean);
        
        /**
         * Retrieves the value for a given key. If this is a caching LinkedMap, the
         * entry will become the most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE=} opt_val A default value that will be returned if the key is
         *     not found, defaults to undefined.
         * @return {VALUE} The retrieved value.
         */
        get(key: string, opt_val?: VALUE): VALUE;
        
        /**
         * Retrieves the value for a given key without updating the entry to be the
         * most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE=} opt_val A default value that will be returned if the key is
         *     not found.
         * @return {VALUE} The retrieved value.
         */
        peekValue(key: string, opt_val?: VALUE): VALUE;
        
        /**
         * Sets a value for a given key. If this is a caching LinkedMap, this entry
         * will become the most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE} value A default value that will be returned if the key is
         *     not found.
         */
        set(key: string, value: VALUE): void;
        
        /**
         * Returns the value of the first node without making any modifications.
         * @return {VALUE} The value of the first node or undefined if the map is empty.
         */
        peek(): VALUE;
        
        /**
         * Returns the value of the last node without making any modifications.
         * @return {VALUE} The value of the last node or undefined if the map is empty.
         */
        peekLast(): VALUE;
        
        /**
         * Removes the first node from the list and returns its value.
         * @return {VALUE} The value of the popped node, or undefined if the map was
         *     empty.
         */
        shift(): VALUE;
        
        /**
         * Removes the last node from the list and returns its value.
         * @return {VALUE} The value of the popped node, or undefined if the map was
         *     empty.
         */
        pop(): VALUE;
        
        /**
         * Removes a value from the LinkedMap based on its key.
         * @param {string} key The key to remove.
         * @return {boolean} True if the entry was removed, false if the key was not
         *     found.
         */
        remove(key: string): boolean;
        
        /**
         * Removes a node from the {@code LinkedMap}. It can be overridden to do
         * further cleanup such as disposing of the node value.
         * @param {!goog.structs.LinkedMap.Node_} node The node to remove.
         * @protected
         */
        removeNode(node: goog.structs.LinkedMap.Node_): void;
        
        /**
         * @return {number} The number of items currently in the LinkedMap.
         */
        getCount(): number;
        
        /**
         * @return {boolean} True if the cache is empty, false if it contains any items.
         */
        isEmpty(): boolean;
        
        /**
         * Sets the maximum number of entries allowed in this object, truncating any
         * excess objects if necessary.
         * @param {number} maxCount The new maximum number of entries to allow.
         */
        setMaxCount(maxCount: number): void;
        
        /**
         * @return {!Array.<string>} The list of the keys in the appropriate order for
         *     this LinkedMap.
         */
        getKeys(): Array<string>;
        
        /**
         * @return {!Array.<VALUE>} The list of the values in the appropriate order for
         *     this LinkedMap.
         */
        getValues(): Array<VALUE>;
        
        /**
         * Tests whether a provided value is currently in the LinkedMap. This does not
         * affect item ordering in cache-style LinkedMaps.
         * @param {VALUE} value The value to check for.
         * @return {boolean} Whether the value is in the LinkedMap.
         */
        contains(value: VALUE): boolean;
        
        /**
         * Tests whether a provided key is currently in the LinkedMap. This does not
         * affect item ordering in cache-style LinkedMaps.
         * @param {string} key The key to check for.
         * @return {boolean} Whether the key is in the LinkedMap.
         */
        containsKey(key: string): boolean;
        
        /**
         * Removes all entries in this object.
         */
        clear(): void;
        
        /**
         * Calls a function on each item in the LinkedMap.
         *
         * @see goog.structs.forEach
         * @param {Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         */
        forEach(f: Function, opt_obj?: Object): void;
        
        /**
         * Calls a function on each item in the LinkedMap and returns the results of
         * those calls in an array.
         *
         * @see goog.structs.map
         * @param {!Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {!Array.<VALUE>} The results of the function calls for each item in
         *     the LinkedMap.
         */
        map(f: Function, opt_obj?: Object): Array<VALUE>;
        
        /**
         * Calls a function on each item in the LinkedMap and returns true if any of
         * those function calls returns a true-like value.
         *
         * @see goog.structs.some
         * @param {Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap, and returns a
         *     boolean.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {boolean} Whether f evaluates to true for at least one item in the
         *     LinkedMap.
         */
        some(f: Function, opt_obj?: Object): boolean;
        
        /**
         * Calls a function on each item in the LinkedMap and returns true only if every
         * function call returns a true-like value.
         *
         * @see goog.structs.some
         * @param {Function} f The function to call for each item. The function takes
         *     three arguments: the value, the key, and the Cache, and returns a
         *     boolean.
         * @param {Object=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {boolean} Whether f evaluates to true for every item in the Cache.
         */
        every(f: Function, opt_obj?: Object): boolean;
    }
}
