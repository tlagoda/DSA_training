/*
    Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
    Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
    threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be
    composed of several stacks and should create a new stack once the previous one exceeds capacity.
    SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
    (that is, pop() should return the same values as it would if there were just a single stack).
    FOLLOW UP
    Implement a function popAt(index: number) which performs a pop operation on a specific sub-stack. 
*/

import { Stack } from "../utils/Data_Structures/Stack.ts";

class SetOfStacks {
  threshold: number;
  stacks: Stack[];
  numberOfStacks: number;
  countInActualStack: number;
  constructor(threshold: number) {
    this.threshold = threshold;
    this.numberOfStacks = 1;
    this.countInActualStack = 0;
    this.stacks = [new Stack()];
  }

  push(element: any) {
    if (this.countInActualStack + 1 > this.threshold || !this.stacks.length) {
      this.stacks.push(new Stack());
      this.numberOfStacks++;
      this.countInActualStack = 1;
      this.stacks[this.numberOfStacks - 1].push(element);
    } else {
      this.countInActualStack++;
      this.stacks[this.numberOfStacks - 1].push(element);
    }
  }

  pop() {
    if (this.countInActualStack === 1) {
      this.stacks.pop();
      this.numberOfStacks--;
      this.countInActualStack--;
    } else {
      this.stacks[this.numberOfStacks - 1].pop();
      this.countInActualStack--;
    }
  }

  peek() {
    if (this.stacks[this.numberOfStacks - 1]) {
      return this.stacks[this.numberOfStacks - 1].peek();
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.stacks.length;
  }

  toString() {
    return `numberOfStacks: ${this.numberOfStacks} | elementsInLastStack: ${
      this.countInActualStack
    } | lastElement: ${this.peek()}`;
  }
}

// TESTING

const mySetOfStacks = new SetOfStacks(3);

mySetOfStacks.push(2);
mySetOfStacks.push(4);
console.log(mySetOfStacks.toString());
mySetOfStacks.pop();
mySetOfStacks.pop();
console.log(mySetOfStacks.toString());
mySetOfStacks.push(10);
mySetOfStacks.push(11);
mySetOfStacks.push(12);
mySetOfStacks.push(13);
console.log(mySetOfStacks.toString());
