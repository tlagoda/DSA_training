/*
    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.
*/

import {
  SinglyLinkedList,
  SinglyLinkedListNode,
} from "../../utils/Data_Structures/SinglyLinkedList.ts";

const mergeTwoListsUsingList = (
  list1: SinglyLinkedList,
  list2: SinglyLinkedList
): SinglyLinkedList => {
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  let sortedList = new SinglyLinkedList();
  // find a way to create a node and add

  while (currentNode1?.data && currentNode2?.data) {
    if (currentNode1.data > currentNode2.data) {
      sortedList.append(currentNode2.data);
      if (currentNode2.next) {
        currentNode2 = currentNode2.next;
      } else {
        currentNode2 = null
        while(currentNode1) {
            sortedList.append(currentNode1.data)
            currentNode1 = currentNode1.next
        }
      }
    } else {
      sortedList.append(currentNode1.data);
      if (currentNode1.next) {
        currentNode1 = currentNode1.next;
      } else {
        currentNode1 = null
        while(currentNode2) {
            sortedList.append(currentNode2.data)
            currentNode2 = currentNode2.next
        }
      }
    }
  }
  return sortedList;
};

// TESTING

const ll1 = new SinglyLinkedList()
const ll2 = new SinglyLinkedList()

ll1.append(1)
ll2.append(2)
ll2.append(4)
ll2.append(7)
ll2.append(10)
ll1.append(2)
ll1.append(4)
ll1.append(4)
ll1.append(7)
ll1.append(9)

console.log(mergeTwoListsUsingList(ll1,ll2).toString())