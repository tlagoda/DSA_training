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

  enqueue(element: any): void {
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

// EXPORT

export { Queue };
