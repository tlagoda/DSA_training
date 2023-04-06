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
    this.count = 1;
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
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // depth-first search - branch by branch

  // left, root, right
  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      // if there is a left child, go left again
      if (node.left) {
        traverse(node.left);
      }
      // capture root node value
      result.push(node.value);
      // if there is a right child, go right again
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  // root, left, right
  dffPreOrder() {
    let result = [];

    const traverse = (node) => {
      // capture root node value
      result.push(node.value);
      // if there is a left child, go left again
      if (node.left) {
        traverse(node.left);
      }
      // if there is a right child, go right again
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  // left, right, root
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      // if there is a left child, go left again
      if (node.left) {
        traverse(node.left);
      }
      // if there is a right child, go right again
      if (node.right) {
        traverse(node.right);
      }
      // capture root node value
      result.push(node.value);
    };

    traverse(this.root);
    return result;
  }

  // breadth-first search - level by level

  bfs() {
    let result = [];
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }
}

// TESTING

const bst = new BinarySearchTree(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst.size());
console.log(bst.min());
console.log(bst.max());
console.log(bst.contains(12));
console.log(bst.contains(30));

console.log('DFS In Order:')
console.log(bst.dfsInOrder());
console.log('DFS Pre Order:')
console.log(bst.dffPreOrder())
console.log('DFS Post Order:')
console.log(bst.dfsPostOrder())
console.log('BST:')
console.log(bst.bfs())

// EXPORT

export default BinarySearchTree;