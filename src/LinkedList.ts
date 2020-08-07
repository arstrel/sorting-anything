import { Sortable } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList implements Sortable {
  head: Node | null = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let current = this.head;
    while (current.next) {
      current = current.next;
      length++;
    }
    return length;
  }
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (index === counter) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error('Index out of bounds');
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
