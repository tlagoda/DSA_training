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

  add(element: any): void {
    this.storage[this.tail] = element;
    this.tail++;
  }

  remove(): any {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }

  peek(): any {
    return this.head;
  }

  isEmpty(): boolean {
    return Object.keys(this.storage).length === 0;
  }
}

// EXPORT

export { Queue };
