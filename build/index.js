"use strict";
var unsorted = [4, 1, 5, 7, 2, 9, 3, 0, -5];
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var _this = this;
        var swap = function (id1, id2) {
            var _a;
            _a = [
                _this.collection[id2],
                _this.collection[id1],
            ], _this.collection[id1] = _a[0], _this.collection[id2] = _a[1];
        };
        var noSwap;
        for (var i = this.collection.length; i >= 0; i--) {
            noSwap = true;
            for (var j = 1; j < i; j++) {
                if (this.collection[j] < this.collection[j - 1]) {
                    noSwap = false;
                    swap(j, j - 1);
                }
            }
            if (noSwap) {
                break;
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter(unsorted);
sorter.sort();
console.log(sorter.collection);
