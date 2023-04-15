/*
    A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 
    A divisor of an integer x is an integer that can divide x evenly.

    Given an integer n, return true if n is a perfect number, otherwise return false.
*/

const isPerfectNumber = (num: number): boolean => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0 && i !== num) {
      sum += i;
    }
  }
  return sum === num
};
