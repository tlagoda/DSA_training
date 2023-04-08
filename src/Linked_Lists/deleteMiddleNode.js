/*
    Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
    the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    that node.
    EXAMPLE
    Input: the node c from the linked list a->b->c->d->e->f
    Result: nothing is returned, but the new linked list looks like a->b->d->e->f 
*/

import { LinkedList } from "../utils/Data_Structures/LinkedList.js"
import { generateLinkedList } from '../utils/Data_Structures/LinkedListService.js'

const removeMiddleNode = (node) => {
    if(node === null || node.prev === null || node.next === null) {
        // node in the middle
        return false
    }
    const nextNode = node.next
    node.data = nextNode.data
    node.next = nextNode.next
    return true
}
