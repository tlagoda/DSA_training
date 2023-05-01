/*
    Given head, the head of a linked list, determine if the linked list has a cycle in it.

    There is a cycle in a linked list if there is some node in the list that can 
    be reached again by continuously following the next pointer. Internally, pos is used 
    to denote the index of the node that tail's next pointer is connected to. Note that 
    pos is not passed as a parameter.

    Return true if there is a cycle in the linked list. Otherwise, return false.

    Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

import { generateSinglyLinkedList } from "../../utils/Data_Structures/LinkedListService.ts";
import { SinglyLinkedListNode } from "../../utils/Data_Structures/SinglyLinkedList.ts";

// using the Floyd's Cycle Finding Algorithm
const hasCycle = (head: SinglyLinkedListNode): boolean => {
  if (head === null) {
    return false;
  }
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

// TESTING

const ll1 = generateSinglyLinkedList(10,10)
console.log(`ll1 has cycle: ${hasCycle(ll1.head)}`)
console.log('Add cycle within ll1...')
ll1.makeCycleFromTail(5)
console.log(`ll1 has cycle: ${hasCycle(ll1.head)}`)