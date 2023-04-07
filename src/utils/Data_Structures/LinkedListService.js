import { LinkedList } from "./LinkedList.js";

const generateLinkedList = (llSize, maxValue) => {
  const ll = new LinkedList();
  for (let i = 1; i <= llSize; i++) {
    if (i % 2 !== 0) {
      ll.append(Math.floor(Math.random() * maxValue));
    } else {
      ll.prepend(Math.floor(Math.random() * maxValue));
    }
  }
  return ll;
};
