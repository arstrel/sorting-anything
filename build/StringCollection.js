"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharCollection = /** @class */ (function () {
    function CharCollection(str) {
        this.str = str;
    }
    Object.defineProperty(CharCollection.prototype, "length", {
        get: function () {
            return this.str.length;
        },
        enumerable: true,
        configurable: true
    });
    return CharCollection;
}());
exports.CharCollection = CharCollection;
