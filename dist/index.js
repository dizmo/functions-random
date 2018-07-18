"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns provided argument(s) as is without any modification.
 *
 * The identify function is a no-operation and does not modify the provided list
 * of arguments. If no or a single argument is provided then nothing or only the
 * same single argument is returned.
 *
 * @param args list of anything
 * @returns provided argument(s)
 */
function id() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    if (args.length === 0) {
        return undefined;
    }
    if (args.length === 1) {
        return args[0];
    }
    return args;
}
exports.id = id;
exports.default = id;
//# sourceMappingURL=index.js.map