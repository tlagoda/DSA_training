/*
    BINARY SEARCH TREE
*/

class Node {
  value: number;
  left: Node;
  right: Node;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: Node;
  count: number;

  constructor(value: number) {
    this.root = new Node(value);
    this.count = 1;
  }

  size(): number {
    return this.count;
  }

  insert(value: number): void {
    this.count++;
    let newNode = new Node(value);

    const searchTree = (node: Node) => {
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

  min(): number {
    let currentNode = this.root;
    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max(): number {
    let currentNode = this.root;
    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value: number): boolean {
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
  dfsInOrder(): number[] {
    let result = [] as number[];
    const traverse = (node: Node) => {
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
  dffPreOrder(): number[] {
    let result = [];

    const traverse = (node: Node) => {
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
  dfsPostOrder(): number[] {
    let result = [];

    const traverse = (node: Node) => {
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

// EXPORT

export default BinarySearchTree;
