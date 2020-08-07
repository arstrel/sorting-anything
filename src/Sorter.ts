export abstract class BubbleSorter {
  abstract length: number;
  abstract compare(leftHandId: number, rightHandId: number): boolean;
  abstract swap(leftHandId: number, rightHandId: number): void;

  sort(): void {
    let noSwap: boolean;
    for (let i = this.length; i >= 0; i--) {
      noSwap = true;
      for (let j = 1; j < i; j++) {
        if (this.compare(j - 1, j)) {
          noSwap = false;
          this.swap(j - 1, j);
        }
      }
      if (noSwap) {
        break;
      }
    }
  }
}
