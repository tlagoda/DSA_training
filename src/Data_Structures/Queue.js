/*
    QUEUE
*/

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

// TESTING

const myQueue = new Queue()

myQueue.enqueue('JJ Watt')
myQueue.enqueue('Aaron Donald')
myQueue.enqueue('Tom Brady')
myQueue.enqueue('Patrick Mahomes')
myQueue.enqueue('Nick Bosa')

console.log(myQueue)

myQueue.dequeue()
myQueue.dequeue()

console.log(myQueue)

// EXPORT

export default Queue;