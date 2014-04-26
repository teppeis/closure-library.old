declare module goog.db {

    /**
     * Creates an IDBObjectStore wrapper object. Object stores have methods for
     * storing and retrieving records, and are accessed through a transaction
     * object. They also have methods for creating indexes associated with the
     * object store. They can only be created when setting the version of the
     * database. Should not be created directly, access object stores through
     * transactions.
     * @see goog.db.IndexedDb#setVersion
     * @see goog.db.Transaction#objectStore
     *
     * @param {!IDBObjectStore} store The backing IndexedDb object.
     * @constructor
     *
     * TODO(user): revisit msg in exception and errors in this class. In newer
     *     Chrome (v22+) the error/request come with a DOM error string that is
     *     already very descriptive.
     * @final
     */
    export function ObjectStore(store: IDBObjectStore): void;
}
