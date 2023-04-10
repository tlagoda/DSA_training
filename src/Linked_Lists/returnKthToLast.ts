/*
    Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. 
*/

import {
  LinkedList,
  LinkedListNode,
} from "../utils/Data_Structures/LinkedList";
import { generateLinkedList } from "../utils/Data_Structures/LinkedListService";

const getKthToLast = (linkedList: LinkedList, k: number): LinkedListNode => {
  if (k === 0) {
    return linkedList.tail;
  }
  let node1 = linkedList.head;
  let node2 = linkedList.head;

  for (let i = 0; i < k; i++) {
    if (!node1.next) {
      return null;
    }
    node1 = node1.next;
  }

  while (node1.next) {
    node2 = node2.next;
    node1 = node1.next;
  }
  return node2;
};

// TESTING

const myLinkedList = generateLinkedList(12, 30);
const k = 4;
console.log(myLinkedList.toString());
console.log("Retrieving kth to last element...");
const kthToLastNode = getKthToLast(myLinkedList, k);
console.log(kthToLastNode?.toString());
