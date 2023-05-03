/*
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, 
    and the nodes have the same value.
*/

import { BinaryTreeNode } from "../../utils/Data_Structures/BinaryTree.ts";

const isSameTree = (root1: BinaryTreeNode, root2: BinaryTreeNode): boolean => {
  if (root1 === null && root2 === null) {
    return true;
  } else if (root1 === null || root2 === null) {
    return false;
  } else if (root1.data !== root2.data) {
    return false;
  } else {
    return (
      isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
    );
  }
};
