// Implementation of a Linked List

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.previous = oldTail;
    }
  }
  
  prepend() {}

  deleteHead() {}

  deleteTail() {}

  search() {}
}

class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev || null;
    this.nex = next || null;
  }
}
