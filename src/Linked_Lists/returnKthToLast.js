/*
    Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. 
*/

import { generateLinkedList } from "../utils/Data_Structures/LinkedListService.js";

const getKthToLast = (linkedList, k) => {
  if (k === 0) {
    return linkedList.tail;
  }
  let pointer1 = linkedList.head;
  let pointer2 = linkedList.head;

  for (let i = 0; i < k; i++) {
    if (!pointer1.next) {
      return linkedList;
    }
    pointer1 = pointer1.next;
  }

  while (pointer1.next) {
    pointer2 = pointer2.next;
    pointer1 = pointer1.next;
  }
  return pointer2;
};

// TESTING

const myLinkedList = generateLinkedList(12, 30);
const k = 5;
console.log(myLinkedList.toString());
console.log("Retrieving kth to last element...");
console.log(getKthToLast(myLinkedList, k));
