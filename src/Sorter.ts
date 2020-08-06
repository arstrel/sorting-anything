export interface Sortable {
  length: number;
  compare: (leftHandId: number, rightHandId: number) => boolean;
  swap: (leftHandId: number, rightHandId: number) => void;
}

export class BubbleSorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    let noSwap: boolean;
    for (let i = this.collection.length; i >= 0; i--) {
      noSwap = true;
      for (let j = 1; j < i; j++) {
        if (this.collection.compare(j - 1, j)) {
          noSwap = false;
          this.collection.swap(j - 1, j);
        }
      }
      if (noSwap) {
        break;
      }
    }
  }
}
