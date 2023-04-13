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
