declare module  {

    /**
     * Imports a script using the Web Worker importScript API.
     *
     * @param {string} src The script source.
     * @return {boolean} True if the script was imported, false otherwise.
     */
    export function CLOSURE_IMPORT_SCRIPT(src: string): boolean;
}
