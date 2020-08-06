"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharCollection = /** @class */ (function () {
    function CharCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharCollection.prototype.swap = function (leftIndex, rightIndex) {
        var _a;
        var characters = this.data.split('');
        _a = [
            characters[rightIndex],
            characters[leftIndex],
        ], characters[leftIndex] = _a[0], characters[rightIndex] = _a[1];
        this.data = characters.join('');
    };
    return CharCollection;
}());
exports.CharCollection = CharCollection;
