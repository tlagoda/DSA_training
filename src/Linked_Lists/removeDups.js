/*
    Remove Dups : Write code to remove duplicates from an unsorted linked list.
*/

import HashTable from "../utils/Data_Structures/HashTable.js";

const removeDuplicates = (linkedList) => {
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
