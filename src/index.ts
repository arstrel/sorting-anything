const unsorted = [4, 1, 5, 7, 2, 9, 3, 0, -5];

class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const swap = (id1: number, id2: number): void => {
      [this.collection[id1], this.collection[id2]] = [
        this.collection[id2],
        this.collection[id1],
      ];
    };

    let noSwap;
    for (let i = this.collection.length; i >= 0; i--) {
      noSwap = true;
      for (let j = 1; j < i; j++) {
        if (this.collection[j] < this.collection[j - 1]) {
          noSwap = false;
          swap(j, j - 1);
        }
      }
      if (noSwap) {
        break;
      }
    }
  }
}

const sorter = new Sorter(unsorted);
sorter.sort();
console.log(sorter.collection);
