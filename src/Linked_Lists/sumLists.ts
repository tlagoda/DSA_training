/*
    Sum Lists: You have two numbers represented by a linked list, where each node contains a single
    digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
    function that adds the two numbers and returns the sum as a linked list.
    EXAMPLE
    Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
    Output: 2 -> 1 -> 9. That is, 912.
*/

import { DoublyLinkedList } from "../utils/Data_Structures/DoublyLinkedList.js";

// works only for two linked list that are the same size
// TODO: improve algorithm
const sumLists = (
  linkedList1: DoublyLinkedList,
  linkedList2: DoublyLinkedList
): DoublyLinkedList => {
  let node1 = linkedList1.head;
  let node2 = linkedList2.head;
  const result = new DoublyLinkedList();
  let extra = 0;
  while (node1 || node2) {
    if (node1.data + node2.data + extra >= 10) {
      result.append(node1.data + node2.data + extra - 10);
      extra = 1;
    } else {
      result.append(node1.data + node2.data + extra);
    }
    if (
      node1.data + node2.data + extra >= 10 &&
      (node1.next === null || node2.next === null)
    ) {
      result.append(
        parseInt(String(node1.data + node2.data + extra).charAt(0))
      );
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return result;
};

// TESTING

const ll1 = new DoublyLinkedList();
ll1.append(1);
ll1.append(7);
ll1.append(4);
const ll2 = new DoublyLinkedList();
ll2.append(6);
ll2.append(9);
ll2.append(5);

const result = sumLists(ll1, ll2);
console.log(result.toString());
