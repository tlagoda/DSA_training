// Implementation of a Linked List

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append() {}

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
