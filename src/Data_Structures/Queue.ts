/*
    QUEUE
*/

class Queue {
  storage: {};
  head: number;
  tail: number;

  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element): void {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue(): any {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

// TESTING

const myQueue = new Queue();

myQueue.enqueue("JJ Watt");
myQueue.enqueue("Aaron Donald");
myQueue.enqueue("Tom Brady");
myQueue.enqueue("Patrick Mahomes");
myQueue.enqueue("Nick Bosa");

console.log(myQueue);

myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);
