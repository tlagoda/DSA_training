// Implementation of a Singly Linked List

class SinglyLinkedList {
  head: SinglyLinkedListNode;
  tail: SinglyLinkedListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: number): void {
    // in case list is empty
    if (!this.tail) {
      this.head = this.tail = new SinglyLinkedListNode(value);
    } else {
      let oldTail = this.tail;
      this.tail = new SinglyLinkedListNode(value);
      oldTail.next = this.tail;
    }
  }

  prepend(value: number): void {
    // in case list is empty
    if (!this.head) {
      this.head = this.tail = new SinglyLinkedListNode(value);
    } else {
      let oldHead = this.head;
      this.head = new SinglyLinkedListNode(value);
      this.head.next = oldHead;
    }
  }
}

class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode;

  constructor(data: number, next?: SinglyLinkedListNode | null) {
    this.data = data;
    this.next = next || null;
  }

  toString(): string {
    return `currentData: ${this.data} | nextData: ${this.next?.data}`;
  }
}
