import { LinkedList } from "./LinkedList";

const generateLinkedList = (llSize: number, maxValue: number): LinkedList => {
  const ll = new LinkedList();
  for (let i = 1; i <= llSize; i++) {
    if (i % 2 !== 0) {
      ll.append(Math.floor(Math.random() * maxValue) + 1);
    } else {
      ll.prepend(Math.floor(Math.random() * maxValue) + 1);
    }
  }
  return ll;
};

export { generateLinkedList };
