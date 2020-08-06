import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  data: number[];

  get length(): number {
    return this.data.length;
  }

  constructor(data: number[]) {
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
