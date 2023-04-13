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
        }
        return oldHead.data;
      }
    }
  
    deleteTail(): number {
      // in case list is empty
      if (!this.tail) {
        return null;
      }
      let secondLastNode = this.head;
  
      while (secondLastNode.next.next !== null) {
        secondLastNode = secondLastNode.next;
      }
      secondLastNode.next = null;
      let oldTail = this.tail;
      this.tail = secondLastNode;
      return oldTail.data;
    }
  
    search(value: number): SinglyLinkedListNode | null {
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
  
// TESTING

const mySinglyLinkedList = new SinglyLinkedList()

mySinglyLinkedList.append(4)
mySinglyLinkedList.append(77)
mySinglyLinkedList.append(68)

console.log(mySinglyLinkedList.toString())

mySinglyLinkedList.prepend(44)
mySinglyLinkedList.prepend(19)
mySinglyLinkedList.prepend(100)

console.log(mySinglyLinkedList.toString())

mySinglyLinkedList.deleteHead();
mySinglyLinkedList.deleteTail();

console.log(mySinglyLinkedList.search(44))
console.log(mySinglyLinkedList.search(100))
