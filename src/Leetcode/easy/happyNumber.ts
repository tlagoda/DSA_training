/*
    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    - Starting with any positive integer, replace the number by the sum of the squares of its digits.
    - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    - Those numbers for which this process ends in 1 are happy.
    - Return true if n is a happy number, and false if not.
*/

const isHappy = (n: number): boolean => {
  // we use a map to store values we have already encountered
  // map allow O(1) reading
  let checked = new Map();
  let sum = 0;

  while (n !== 1) {
    for (const digit of n.toString().split("")) {
      sum += parseInt(digit) * parseInt(digit);
    }
    if (sum === 1) {
      return true;
    } else {
      if (checked.get(sum)) {
        return false;
      }
      checked.set(sum, true);
      n = sum;
      sum = 0;
    }
  }
  return true;
};
