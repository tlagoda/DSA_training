/*
    Given the head of a linked list, rotate the list to the right by k places.
*/

import { generateSinglyLinkedList } from "../../utils/Data_Structures/LinkedListService.js";
import { SinglyLinkedList } from "../../utils/Data_Structures/SinglyLinkedList.js";

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

