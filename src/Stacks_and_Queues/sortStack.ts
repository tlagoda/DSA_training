/*
    Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
    an additional temporary stack, but you may not copy the elements into any other data structure
    (such as an array). The stack supports the following operations: push, pop, peek, and is Empty. 
*/

import { Stack } from "../utils/Data_Structures/Stack.ts";

const sortStack = (s: Stack) => {
  const tempStack = new Stack();
  while (!s.isEmpty()) {
    const temp = s.pop();
    while (!tempStack.isEmpty() && tempStack.peek() > temp) {
      s.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  while (!tempStack.isEmpty()) {
    s.push(tempStack.pop());
  }
};

// TESTING

const myStack = new Stack();

for (let i = 0; i < 10; i++) {
    myStack.push(Math.floor(Math.random() * 100) + 1)
}

console.log(`Element ${myStack.peek()} is at the top of the stack...`);
console.log(myStack.storage);

sortStack(myStack);
console.log("\nSorting stack...\n");
console.log(`Element ${myStack.peek()} is now at the top of the stack...`);
console.log(myStack.storage);
