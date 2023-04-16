/*
    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.
*/

import {
  SinglyLinkedList,
  SinglyLinkedListNode,
} from "../../utils/Data_Structures/SinglyLinkedList.ts";

const mergeTwoListsUsingNode = (
  n1: SinglyLinkedListNode,
  n2: SinglyLinkedListNode
): SinglyLinkedListNode => {
  let head = new SinglyLinkedListNode(null);
  let tail = head;

  while (n1 && n2) {
    if (n1.data < n2.data) {
      tail.next = n1;
      n1 = n1.next;
    } else {
      tail.next = n2;
      n2 = n2.next;
    }

    tail = tail.next;
  }

  tail.next = !n1 ? n2 : n1;
  return head.next;
};

// TESTING

console.log("Test mergeTwoListsUsingNode:");

const ll1 = new SinglyLinkedList();
const ll2 = new SinglyLinkedList();

const values1 = [1, 2, 4, 7, 10];
const values2 = [2, 4, 4, 7, 9];

values1.forEach((value) => {
  ll1.append(value);
});
values2.forEach((value) => {
  ll2.append(value);
});

let result = mergeTwoListsUsingNode(ll1.head, ll2.head);
const nodes = [];
while (result) {
  nodes.push(result.data);
  result = result.next;
}
console.log(nodes.join(" -> "));

const mergeTwoListsUsingList = (
  list1: SinglyLinkedList,
  list2: SinglyLinkedList
): SinglyLinkedList => {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  let sortedList = new SinglyLinkedList();

  while (currentNode1?.data && currentNode2?.data) {
    if (currentNode1.data > currentNode2.data) {
      sortedList.append(currentNode2.data);
      if (currentNode2.next) {
        currentNode2 = currentNode2.next;
      } else {
        currentNode2 = null;
        while (currentNode1) {
          sortedList.append(currentNode1.data);
          currentNode1 = currentNode1.next;
        }
      }
    } else {
      sortedList.append(currentNode1.data);
      if (currentNode1.next) {
        currentNode1 = currentNode1.next;
      } else {
        currentNode1 = null;
        while (currentNode2) {
          sortedList.append(currentNode2.data);
          currentNode2 = currentNode2.next;
        }
      }
    }
  }
  return sortedList;
};

// TESTING

console.log("\nTest mergeTwoListsUsingList:");

const ll3 = new SinglyLinkedList();
const ll4 = new SinglyLinkedList();

values1.forEach((value) => {
  ll3.append(value);
});
values2.forEach((value) => {
  ll4.append(value);
});

console.log(mergeTwoListsUsingList(ll3, ll4).toString());
