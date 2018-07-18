"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("./String");
/**
 * Returns a random string for the provided length and range.
 *
 * @param length of returned string in [0..8]
 * @param range of characters in [2..36]
 *
 * @returns a random string
 */
function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;

  return String.random(length, range);
}
exports.random = random;
exports.default = random;
//# sourceMappingURL=index.js.map