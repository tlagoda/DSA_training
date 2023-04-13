// Implementation of a Singly Linked List

class SinglyLinkedList {}

class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode;

  constructor(data: number, next: SinglyLinkedListNode | null) {
    this.data = data;
    this.next = next || null;
  }

  toString(): string {
    return `currentData: ${this.data} | nextData: ${this.next?.data}`
  }
}
