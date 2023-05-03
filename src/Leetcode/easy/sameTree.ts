/*
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, 
    and the nodes have the same value.
*/

import { BinaryTreeNode } from "../../utils/Data_Structures/BinaryTree.ts";
import { generateBinaryTree } from "../../utils/Data_Structures/TreeService.ts";

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

// TESTING

const tree1 = generateBinaryTree(30)
const tree2 = generateBinaryTree(30)
const tree3 = tree1
console.log('tree1 and tree2 are the same : ' + isSameTree(tree1.root, tree2.root))
console.log('tree1 and tree3 are the same : ' + isSameTree(tree1.root, tree3.root))