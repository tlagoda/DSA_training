/* 
    HASH TABLE
*/

class HashTable {
  size: number;
  buckets: Map<number, any>[];

  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  _hash(key: any): number {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
      hashedKey = key.charCodeAt(i);
    }
    return hashedKey % this.size;
  }

  insert(key, value): void {
    let index = this._hash(key);
    // set is a native method of Map
    this.buckets[index].set(key, value);
  }

  remove(key): any {
    let index = this._hash(key);
    // get and delete are native methods of Map
    let deleted = this.buckets[index].get(key);
    this.buckets[index].delete(key);

    return deleted;
  }

  search(key): any {
    let index = this._hash(key);
    return this.buckets[index].get(key);
  }
}

// EXPORT

export { HashTable };
