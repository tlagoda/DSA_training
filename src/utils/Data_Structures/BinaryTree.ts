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
  count: number;
  min: number;
  max: number;
  constructor(value: number) {
    this.root = new BinaryTreeNode(value);
  }
}
