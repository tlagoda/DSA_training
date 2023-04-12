// Implementation of a Linked List

class DoublyLinkedList {
  head: DoublyLinkedListNode;
  tail: DoublyLinkedListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: number): void {
    // in case list is empty
    if (!this.tail) {
      this.head = this.tail = new DoublyLinkedListNode(value);
    } else {
      let oldTail = this.tail;
      this.tail = new DoublyLinkedListNode(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  prepend(value: number): void {
    // in case list is empty
    if (!this.head) {
      this.head = this.tail = new DoublyLinkedListNode(value);
    } else {
      let oldHead = this.head;
      this.head = new DoublyLinkedListNode(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead(): number {
    // in case list is empty
    if (!this.head) {
      return null;
    } else {
      let oldHead = this.head;
      // if only 1 node is left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return oldHead.data;
    }
  }

  deleteTail() : number{
    // in case list is empty
    if (!this.tail) {
      return null;
    } else {
      let oldTail = this.tail;
      // if only 1 node is left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return oldTail.data;
    }
  }

  search(value: number): DoublyLinkedListNode | null {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

class DoublyLinkedListNode {
  data: number;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(
    data: number,
    prev?: DoublyLinkedListNode | null,
    next?: DoublyLinkedListNode | null
  ) {
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }
}

// Testing

let myLinkedList = new DoublyLinkedList();

myLinkedList.append(4);
myLinkedList.append(22);
myLinkedList.append(6);

myLinkedList.prepend(14);
myLinkedList.prepend(30);
myLinkedList.prepend(1);

console.log(myLinkedList);
console.log(myLinkedList.search(4));

myLinkedList.deleteHead();
myLinkedList.deleteTail();

console.log(myLinkedList.search(1));
