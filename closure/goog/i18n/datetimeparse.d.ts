declare module goog.i18n {

    /**
     * Construct a DateTimeParse based on current locale.
     * @param {string|number} pattern pattern specification or pattern type.
     * @constructor
     * @final
     */
    export class DateTimeParse {
        constructor(pattern: string);
        
        /**
         * Number of years prior to now that the century used to
         * disambiguate two digit years will begin
         *
         * @type {number}
         */
        static ambiguousYearCenturyStart: number;
        
        /**
         * Parse the given string and fill info into date object. This version does
         * not validate the input.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        parse(text: string, date: goog.date.DateLike, opt_start?: number): number;
        
        /**
         * Parse the given string and fill info into date object. This version will
         * validate the input and make sure it is a validate date/time.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        strictParse(text: string, date: goog.date.DateLike, opt_start?: number): number;
    }
}
