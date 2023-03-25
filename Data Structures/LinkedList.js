// Implementation of a Linked List

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
<<<<<<< HEAD
=======
    // in case list is empty
>>>>>>> origin
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
<<<<<<< HEAD
      this.tail.previous = oldTail;
    }
  }

  prepend() {}

  deleteHead() {}

  deleteTail() {}

  search() {}
=======
      this.tail.prev = oldTail;
    }
  }

  prepend(value) {
    // in case list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
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
>>>>>>> origin
}

class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev || null;
<<<<<<< HEAD
    this.nex = next || null;
  }
}
=======
    this.next = next || null;
  }
}

// Testing

let myLinkedList = new LinkedList();

myLinkedList.append(4);
myLinkedList.append(22);
myLinkedList.append(6);

myLinkedList.prepend(14);
myLinkedList.prepend(30);
myLinkedList.prepend(1);

console.log(myLinkedList)
console.log(myLinkedList.search(4))

myLinkedList.deleteHead()
myLinkedList.deleteTail()

console.log(myLinkedList.search(1))
>>>>>>> origin
