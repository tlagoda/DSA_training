/*
    Stack Min: How would you design a stack which, in addition to push and pop, has a function min
    which returns the minimum element? Push, pop and min should all operate in 0(1) time. 
*/

import { Stack } from "../utils/Data_Structures/Stack.js";

class MinStack extends Stack {
  memoryStack: Stack;
  constructor() {
    super();
    this.memoryStack = new Stack();
  }

  push(element: number): void {
    this.size++;
    this.storage[this.size] = element;
    if (element < this.min()) {
      this.memoryStack.push(element);
    }
  }

  pop(): number {
    const num = super.pop();
    if (num === this.min()) {
      this.memoryStack.pop();
    }
    return num;
  }

  min(): number {
    if (this.memoryStack.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    } else {
      return this.memoryStack.peek();
    }
  }

  printMin(): void {
    if (super.isEmpty()) {
      console.log("The Stack is empty!");
    } else {
      console.log(`The minimum of the Stack is ${this.min()}!`);
    }
  }
}
