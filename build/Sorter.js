"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter() {
    }
    BubbleSorter.prototype.sort = function () {
        var noSwap;
        for (var i = this.length; i >= 0; i--) {
            noSwap = true;
            for (var j = 1; j < i; j++) {
                if (this.compare(j - 1, j)) {
                    noSwap = false;
                    this.swap(j - 1, j);
                }
            }
            if (noSwap) {
                break;
            }
        }
    };
    return BubbleSorter;
}());
exports.BubbleSorter = BubbleSorter;
