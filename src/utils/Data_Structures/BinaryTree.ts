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
  count: number = 1;
  min?: number;
  max?: number;

  constructor(value: number, min: number = 1, max: number = 10) {
    this.root = new BinaryTreeNode(value);
    this.min = min;
    this.max = max;
  }

  insert(value: number): void {
    if ((this.min && value < this.min) || (this.max && value > this.max)) {
      console.log("Invalid value.");
      return;
    }

    const newNode = new BinaryTreeNode(value);
    let node = this.root;

    while (true) {
      if (Math.random() < 0.5) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = newNode;
          this.count++;
          break;
        }
      } else {
        if (node.right) {
          node = node.right;
        } else {
          node.right = newNode;
          this.count++;
          break;
        }
      }
    }
  }
}

// TODO
// replace count with size and height properties, adjust insert() method
// add delete(value) / contains(value) / 3 traverse