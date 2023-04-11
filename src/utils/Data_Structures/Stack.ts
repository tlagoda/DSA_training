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

  push(element: any): void {
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

// EXPORT

export { Stack };
