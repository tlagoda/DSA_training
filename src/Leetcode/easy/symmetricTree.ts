/*
    Given the root of a binary tree, check whether it is a mirror of itself 
    (i.e., symmetric around its center).
*/

import {
  BinaryTree,
  BinaryTreeNode,
} from "../../utils/Data_Structures/BinaryTree.ts";

const isSymmetric = (root: BinaryTreeNode): boolean => {
  return areEquals(root.left, root.right);
};

const areEquals = (node1: BinaryTreeNode, node2: BinaryTreeNode): boolean => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  return (
    node1.data === node2.data &&
    areEquals(node1.left, node2.right) &&
    areEquals(node1.right, node2.left)
  );
};

// TESTING

const tree1 = new BinaryTree(10);
tree1.root.left = new BinaryTreeNode(5);
tree1.root.right = new BinaryTreeNode(5);

const tree2 = new BinaryTree(10);
tree2.root.left = new BinaryTreeNode(6);
tree2.root.right = new BinaryTreeNode(5);

console.log("[10,5,5]: " + isSymmetric(tree1.root));
console.log("[10,6,5]: " + isSymmetric(tree2.root));
