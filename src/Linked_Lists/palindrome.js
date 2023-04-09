/*
    Palindrome: Implement a function to check if a linked list is a palindrome. 
*/

import { LinkedList } from "../utils/Data_Structures/LinkedList.js"

const isPalindrome = (linkedList) => {
    let reversedLinkedList = new LinkedList()
    let currentNode = linkedList.head
    console.log(currentNode)
    while(currentNode) {
        reversedLinkedList.prepend(currentNode)
        currentNode = currentNode.next
    }
    return reversedLinkedList
}
