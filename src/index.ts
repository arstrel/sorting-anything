import { BubbleSorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

const numbersCol = new NumbersCollection([4, 1, 5, 7, 2, 9, 3, 0, -5]);
const charCollection = new CharCollection('uhoiushXrtad');
const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(1);
linkedList.add(6);
linkedList.add(2);
linkedList.add(-5);

const sorter = new BubbleSorter(numbersCol);
sorter.sort();
console.log(numbersCol.data);

const charSorter = new BubbleSorter(charCollection);
charSorter.sort();
console.log(charCollection.data);

const linkedListSorter = new BubbleSorter(linkedList);
linkedListSorter.sort();
linkedList.print();
