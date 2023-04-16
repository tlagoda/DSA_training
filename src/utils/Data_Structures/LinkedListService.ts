import { SinglyLinkedList } from "./SinglyLinkedList.ts";
import { DoublyLinkedList } from "./DoublyLinkedList.js";

const generateSinglyLinkedList = (llSize: number, maxValue: number): SinglyLinkedList => {
  const ll = new SinglyLinkedList();
  for (let i = 1; i <= llSize; i++) {
    if (i % 2 !== 0) {
      ll.append(Math.floor(Math.random() * maxValue) + 1);
    } else {
      ll.prepend(Math.floor(Math.random() * maxValue) + 1);
    }
  }
  return ll;
};

const generateDoublyLinkedList = (llSize: number, maxValue: number): DoublyLinkedList => {
  const ll = new DoublyLinkedList();
  for (let i = 1; i <= llSize; i++) {
    if (i % 2 !== 0) {
      ll.append(Math.floor(Math.random() * maxValue) + 1);
    } else {
      ll.prepend(Math.floor(Math.random() * maxValue) + 1);
    }
  }
  return ll;
};

export { generateDoublyLinkedList, generateSinglyLinkedList };
