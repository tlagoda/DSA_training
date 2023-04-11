/*
    Palindrome: Implement a function to check if a linked list is a palindrome. 
*/

import { LinkedList } from "../utils/Data_Structures/LinkedList.js";

const isPalindrome = (linkedList: LinkedList): boolean => {
  let reversedLinkedList = new LinkedList();
  let currentNode = linkedList.head;
  while (currentNode) {
    reversedLinkedList.prepend(currentNode.data);
    currentNode = currentNode.next;
  }
  let node1 = linkedList.head;
  let node2 = reversedLinkedList.head;
  while (node1 !== null && node2 !== null) {
    if (node1.data !== node2.data) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return true;
};

// TESTING

const myLinkedList1 = new LinkedList();
myLinkedList1.append(1);
myLinkedList1.append(3);
myLinkedList1.append(5);
myLinkedList1.prepend(3);
myLinkedList1.prepend(5);

console.log(myLinkedList1.toString());
console.log(`The linked list is a palindrome : ${isPalindrome(myLinkedList1)}`);

const myLinkedList2 = new LinkedList();
myLinkedList2.append(1);
myLinkedList2.append(3);
myLinkedList2.append(5);
myLinkedList2.prepend(3);
myLinkedList2.prepend(10);

console.log(myLinkedList2.toString());
console.log(`The linked list is a palindrome : ${isPalindrome(myLinkedList2)}`);
