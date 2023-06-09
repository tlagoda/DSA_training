/*
    Remove Dups : Write code to remove duplicates from an unsorted linked list.

    How would you solve this problem if a temporary buffer is not allowed?
    //TODO
*/

import { DoublyLinkedList } from "../utils/Data_Structures/DoublyLinkedList.js";
import { HashTable } from "../utils/Data_Structures/HashTable.js";

const removeDuplicates = (linkedList: DoublyLinkedList): void => {
  const hashTable = new HashTable();
  let previousNode = null;
  let currentNode = linkedList.head;

  while (currentNode) {
    if (hashTable.search(currentNode.data)) {
      previousNode.next = currentNode.next;
    } else {
      hashTable.insert(currentNode.data, currentNode.data.toString());
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }
};

// TESTING

const myLinkedList = new DoublyLinkedList();
myLinkedList.append(7);
myLinkedList.append(14);
myLinkedList.append(88);
myLinkedList.append(1);
myLinkedList.append(14);
myLinkedList.append(3);
myLinkedList.append(1);
console.log(`myLinkedList : ${myLinkedList.toString()}`);
removeDuplicates(myLinkedList);
console.log("\nRemoving duplicates...\n");
console.log(`myLinkedList : ${myLinkedList.toString()}`);
