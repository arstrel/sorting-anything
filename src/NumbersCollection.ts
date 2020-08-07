import { BubbleSorter } from './Sorter';

export class NumbersCollection extends BubbleSorter {
  data: number[];

  get length(): number {
    return this.data.length;
  }

  constructor(data: number[]) {
    super();
    this.data = data;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const leftValue = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftValue;
  }
}
