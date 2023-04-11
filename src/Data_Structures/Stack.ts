/*
    STACK
*/

class Stack {
  storage: {};
  size: number;

  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element): void {
    this.size++;
    this.storage[this.size] = element;
  }

  pop(): any {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek(): any {
    return this.storage[this.size];
  }
}

// TESTING

const myStack = new Stack();

myStack.push("JavaScript");
myStack.push("C++");
myStack.push("Python");

console.log(myStack);

myStack.pop();
myStack.pop();

console.log(myStack);

myStack.push("Go");
console.log(myStack.peek());
