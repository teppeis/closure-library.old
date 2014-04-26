declare module goog.testing.asserts {

    /**
     * @typedef {Array|NodeList|Arguments|{length: number}}
     */
    export interface ArrayLike {
    }

    /**
     * The return value of the equality predicate passed to findDifferences below,
     * in cases where the predicate can't test the input variables for equality.
     * @type {?string}
     */
    export var EQUALITY_PREDICATE_CANT_PROCESS: string;

    /**
     * The return value of the equality predicate passed to findDifferences below,
     * in cases where the input vriables are equal.
     * @type {?string}
     */
    export var EQUALITY_PREDICATE_VARS_ARE_EQUAL: string;

    /**
     * Runs a function in an environment where test failures are not logged. This is
     * useful for testing test code, where failures can be a normal part of a test.
     * @param {function() : void} fn Function to run without logging failures.
     */
    export function callWithoutLogging(fn: () => void): void;

    /**
     * Determines if two items of any type match, and formulates an error message
     * if not.
     * @param {*} expected Expected argument to match.
     * @param {*} actual Argument as a result of performing the test.
     * @param {(function(string, *, *): ?string)=} opt_equalityPredicate An optional
     *     function that can be used to check equality of variables. It accepts 3
     *     arguments: type-of-variables, var1, var2 (in that order) and returns an
     *     error message if the variables are not equal,
     *     goog.testing.asserts.EQUALITY_PREDICATE_VARS_ARE_EQUAL if the variables
     *     are equal, or
     *     goog.testing.asserts.EQUALITY_PREDICATE_CANT_PROCESS if the predicate
     *     couldn't check the input variables. The function will be called only if
     *     the types of var1 and var2 are identical.
     * @return {?string} Null on success, error message on failure.
     */
    export function findDifferences(expected: any, actual: any, opt_equalityPredicate?: (arg0: string, arg1: any, arg2: any) => string): string;

    /**
     * Raises a JsUnit exception with the given comment.
     * @param {string} comment A summary for the exception.
     * @param {string=} opt_message A description of the exception.
     */
    export function raiseException(comment: string, opt_message?: string): void;
}

declare module goog.testing {

    /**
     * @param {string} comment A summary for the exception.
     * @param {?string=} opt_message A description of the exception.
     * @constructor
     * @extends {Error}
     * @final
     */
    export class JsUnitException extends Error {
        constructor(comment: string, opt_message?: string);
        
        /** @override */
        toString(): void;
    }
}
