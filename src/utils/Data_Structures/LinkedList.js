// Implementation of a Linked List

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
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

  prepend(value) {
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

  deleteHead() {
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
      return oldHead.value;
    }
  }

  deleteTail() {
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
      return oldTail.value;
    }
  }

  search(value) {
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

class LinkedListNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }
}

// EXPORT

export { LinkedList, LinkedListNode };
