"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("./String");
function random() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 36;

    return String.random(length, range);
}
exports.random = random;
exports.default = random;
//# sourceMappingURL=index.js.map