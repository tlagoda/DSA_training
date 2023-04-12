/*
    Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
    the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    that node.
    EXAMPLE
    Input: the node c from the linked list a->b->c->d->e->f
    Result: nothing is returned, but the new linked list looks like a->b->d->e->f 
*/

import { generateDoublyLinkedList } from "../utils/Data_Structures/LinkedListService.js";
import { DoublyLinkedListNode } from "../utils/Data_Structures/DoublyLinkedList.js";

const removeMiddleNode = (node: DoublyLinkedListNode): boolean => {
  if (node === null || node.prev === null || node.next === null) {
    return false;
  }
  const nextNode = node.next;
  node.data = nextNode.data;
  node.next = nextNode.next;
  return true;
};

// TESTING

const myLinkedList = generateDoublyLinkedList(30, 4);
console.log(myLinkedList.toString());
removeMiddleNode(myLinkedList.search(3));
console.log("Removing node...");
console.log(myLinkedList.toString());
