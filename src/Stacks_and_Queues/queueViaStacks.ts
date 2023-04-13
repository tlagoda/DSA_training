/*
    Queue via Stacks: Implement a class QueueViaStacks which implements a queue using two stacks. 
*/

import { Stack } from "../utils/Data_Structures/Stack.js";

class QueueViaStacks {
  stackNewest: Stack;
  stackOldest: Stack;
  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }

  add(element: any) {
    // we store new elements in stackNewest
    // stackNewest has newest elements on top
    this.stackNewest.push(element);
  }

  remove() {
    this.#shiftStacks();
    this.stackOldest.pop();
  }

  peek() {
    this.#shiftStacks();
    return this.stackOldest.peek();
  }

  #shiftStacks() {
    if (this.stackOldest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }
}

// TESTING

const qvs = new QueueViaStacks();
for (let i = 1; i <= 5; i++) {
  qvs.add(i);
}
console.log('Added 1, 2, 3, 4, 5...')
console.log(`Element at the front: ${qvs.peek()}\n`)
qvs.remove();
qvs.remove();
console.log('Removed 1, 2...')
console.log(qvs.peek())
console.log(`Element at the front: ${qvs.peek()}\n`)
qvs.add(6)
console.log('Added 6...')
console.log(qvs.peek())
console.log(`Element at the front: ${qvs.peek()}\n`)