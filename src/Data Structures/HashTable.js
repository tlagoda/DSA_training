/* 
    HASH TABLE
*/

// hash function
const hash = (key, size) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }
  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    let index = hash(key, this.size);
    // set is a native method of Map
    this.buckets[index].set(key, value);
  }

  remove(key) {
    let index = hash(key, this.size);
    // get and delete are native methods of Map
    let deleted = this.buckets[index].get(key);
    this.buckets[index].delete(key);

    return deleted;
  }

  search(key) {
    let index = hash(key, this.size);
    return this.buckets[index].get(key);
  }
}
