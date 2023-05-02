/*
    BINARY TREE
*/

class BinaryTreeNode {
  data: number;
  left: BinaryTreeNode;
  right: BinaryTreeNode;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: BinaryTreeNode;
  size: number = 1;
  height: number = 0;
  min?: number;
  max?: number;

  constructor(value: number, min: number = 1, max: number = 10) {
    this.root = new BinaryTreeNode(value);
    this.min = min;
    this.max = max;
  }

  insert(value: number): void {
    if (value < this.min || value > this.max) {
      console.log("Invalid value.");
      return;
    }

    const newNode = new BinaryTreeNode(value);
    let node = this.root;
    let level = 1;

    while (true) {
      if (Math.random() < 0.5) {
        if (node.left) {
          node = node.left;
          level++;
        } else {
          node.left = newNode;
          this.size++;
          this.height = Math.max(this.height, level + 1);
          break;
        }
      } else {
        if (node.right) {
          node = node.right;
          level++;
        } else {
          node.right = newNode;
          this.size++;
          this.height = Math.max(this.height, level + 1);
          break;
        }
      }
    }
  }
}

// TODO
// add delete(value) / contains(value) / 3 traverse
