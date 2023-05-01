/*
    Given head, the head of a linked list, determine if the linked list has a cycle in it.

    There is a cycle in a linked list if there is some node in the list that can 
    be reached again by continuously following the next pointer. Internally, pos is used 
    to denote the index of the node that tail's next pointer is connected to. Note that 
    pos is not passed as a parameter.

    Return true if there is a cycle in the linked list. Otherwise, return false.

    Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

import { SinglyLinkedListNode } from "../../utils/Data_Structures/SinglyLinkedList.ts";

const hasCycle = (head: SinglyLinkedListNode): boolean => {
  let slowRunner = head;
  let fastRunner = head.next;
  while (slowRunner !== fastRunner) {
    if (fastRunner === null || fastRunner.next === null) {
      return false;
    }
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }
  return true;
};
