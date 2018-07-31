"use strict";
/* tslint:disable:interface-name */
/**
 * Attaches to the `String` type a `random` function which returns a random
 * string for the provided length and range.
 *
 * @param length of returned string in [0..8]
 * @param range of characters in [2..36]
 *
 * @returns a random string
 */

String.random = function () {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;

    length = Math.floor(length);
    if (length < 0) {
        throw new Error("length < 0");
    }
    if (length > 8) {
        throw new Error("length > 8");
    }
    range = Math.floor(range);
    if (range < 2) {
        throw new Error("range < 2");
    }
    if (range > 36) {
        throw new Error("range > 36");
    }
    var pow = Math.pow(range, length);
    var mul = range * pow;
    return length > 0 ? Math.floor(mul - pow * Math.random()).toString(range).slice(1) : "";
};
//# sourceMappingURL=String.js.map