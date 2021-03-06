"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharCollection_1 = require("./CharCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCol = new NumbersCollection_1.NumbersCollection([4, 1, 5, 7, 2, 9, 3, 0, -5]);
var charCollection = new CharCollection_1.CharCollection('uhoiushXrtad');
var linkedList = new LinkedList_1.LinkedList();
var sorter = new Sorter_1.BubbleSorter(numbersCol);
sorter.sort();
console.log(numbersCol.data);
var charSorter = new Sorter_1.BubbleSorter(charCollection);
charSorter.sort();
console.log(charCollection.data);
