declare module goog.events {

    /**
     * Key names for common characters. These should be used with keyup/keydown
     * events, since the .keyCode property on those is meant to indicate the
     * *physical key* the user held down on the keyboard. Hence the mapping uses
     * only the unshifted version of each key (e.g. no '#', since that's shift+3).
     * Keypress events on the other hand generate (mostly) ASCII codes since they
     * correspond to *characters* the user typed.
     *
     * For further reference: http://unixpapa.com/js/key.html
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non-US keyboard layouts.
     *
     * @see goog.events.KeyCodes
     * @enum {string}
     */
    export interface KeyNames {
        8: string;
        9: string;
        13: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
        27: string;
        32: string;
        33: string;
        34: string;
        35: string;
        36: string;
        37: string;
        38: string;
        39: string;
        40: string;
        45: string;
        46: string;
        48: string;
        49: string;
        50: string;
        51: string;
        52: string;
        53: string;
        54: string;
        55: string;
        56: string;
        57: string;
        59: string;
        61: string;
        65: string;
        66: string;
        67: string;
        68: string;
        69: string;
        70: string;
        71: string;
        72: string;
        73: string;
        74: string;
        75: string;
        76: string;
        77: string;
        78: string;
        79: string;
        80: string;
        81: string;
        82: string;
        83: string;
        84: string;
        85: string;
        86: string;
        87: string;
        88: string;
        89: string;
        90: string;
        93: string;
        96: string;
        97: string;
        98: string;
        99: string;
        100: string;
        101: string;
        102: string;
        103: string;
        104: string;
        105: string;
        106: string;
        107: string;
        109: string;
        110: string;
        111: string;
        112: string;
        113: string;
        114: string;
        115: string;
        116: string;
        117: string;
        118: string;
        119: string;
        120: string;
        121: string;
        122: string;
        123: string;
        186: string;
        187: string;
        189: string;
        188: string;
        190: string;
        191: string;
        192: string;
        219: string;
        220: string;
        221: string;
        222: string;
        224: string;
    }
}
