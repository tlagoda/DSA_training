/*
    Given the root of a binary tree, check whether it is a mirror of itself 
    (i.e., symmetric around its center).
*/

import { BinaryTreeNode } from "../../utils/Data_Structures/BinaryTree.ts";

const isSymmetric = (root: BinaryTreeNode): boolean => {
  return areEquals(root.left, root.right);
};

const areEquals = (node1: BinaryTreeNode, node2: BinaryTreeNode): boolean => {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;
  return (
    node1.data === node2.data &&
    areEquals(node1.left, node2.right) &&
    areEquals(node1.right, node2.left)
  );
};


