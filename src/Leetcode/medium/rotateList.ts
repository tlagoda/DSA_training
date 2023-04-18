/*
    Given the head of a linked list, rotate the list to the right by k places.
*/

import { generateSinglyLinkedList } from "../../utils/Data_Structures/LinkedListService.js";
import {
  SinglyLinkedList,
  SinglyLinkedListNode,
} from "../../utils/Data_Structures/SinglyLinkedList.js";

const getRotatedListGivenAList = (
  list: SinglyLinkedList,
  k: number
): SinglyLinkedList => {
  const myList = list;
  for (let i = 1; i <= k; i++) {
    let temp = myList.head;
    myList.head = myList.tail;
    myList.head.next = temp;

    let currentNode = myList.head;

    while (currentNode) {
      if (currentNode.next === myList.head) {
        myList.tail = currentNode;
        myList.tail.next = null;
      }
      currentNode = currentNode.next;
    }
  }

  return myList;
};

// TESTING
console.log("getRotatedListGivenAList with k = 4:");
const list1 = generateSinglyLinkedList(10, 5);
console.log("Before: " + list1.toString());
console.log("After: " + getRotatedListGivenAList(list1, 4).toString());

const getRotatedListGivenTheHead = (
  head: SinglyLinkedListNode,
  k: number
): SinglyLinkedListNode => {
  if (head == null) return null;
  if (head.next == null) return head;

  let listSize = 1;
  let oldTail: SinglyLinkedListNode = head;
  while (oldTail.next) {
    oldTail = oldTail.next;
    listSize++;
  }
  oldTail.next = head;

  let newTail: SinglyLinkedListNode = head;
  for (let i = 0; i < listSize - (k % listSize) - 1; i++) {
    newTail = newTail.next;
  }
  let newHead: SinglyLinkedListNode = newTail.next;

  newTail.next = null;

  return newHead;
};
