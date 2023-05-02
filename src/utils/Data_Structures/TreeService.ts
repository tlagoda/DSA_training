import { BinaryTree } from "./BinaryTree.ts";

const generateBinaryTree = (
  size: number,
  min: number = 1,
  max: number = 10
): BinaryTree => {
  const tree = new BinaryTree(size, min, max);
  for (let i = 1; i < size; i++) {
    tree.insert(Math.floor(Math.random() * (max - min) + min));
  }
  return tree
};
