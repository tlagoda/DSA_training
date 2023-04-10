// Implementation of a Linked List

class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: number): void {
    // in case list is empty
    if (!this.tail) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      let oldTail = this.tail;
      this.tail = new LinkedListNode(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  prepend(value: number): void {
    // in case list is empty
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      let oldHead = this.head;
      this.head = new LinkedListNode(value);
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

  deleteTail(): number {
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

  search(value: any): LinkedListNode | null {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  toString(): string {
    let head = this.head;
    const result = [];
    while (head) {
      result.push(head.data);
      head = head.next;
    }
    return result.join(" -> ");
  }
}

class LinkedListNode {
  data: number;
  prev: LinkedListNode | null;
  next: LinkedListNode | null;

  constructor(
    data: number,
    prev?: LinkedListNode | null,
    next?: LinkedListNode | null
  ) {
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }

  toString(): string {
    return JSON.stringify({
      prevData: this.prev?.data,
      currentData: this.data,
      nextData: this.next?.data,
    });
  }
}

// EXPORT

export { LinkedList, LinkedListNode };
