/*
    BINARY SEARCH TREE
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value < node.value go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        } else {
          // if left child, we call searchTree again
          searchTree(node.left);
        }
      }
      // if value > node.value go right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    // continue traversing left until no more children
    while (currentNode) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    // continue traversing right until no more children
    while (currentNode) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains() {}

  // depth-first search

  dfsInOrder() {}

  dffPreOrder() {}

  dfsPostOrder() {}

  // breadth-first search

  bfs() {}
}
