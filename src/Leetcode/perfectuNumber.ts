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

// TESTING

console.log(`28 is a perfect number : ${isPerfectNumber(28)}`)
console.log(`1 is a perfect number : ${isPerfectNumber(1)}`)
console.log(`8128 is a perfect number : ${isPerfectNumber(8128)}`)
console.log(`20 is a perfect number : ${isPerfectNumber(20)}`)
console.log(`33550336 is a perfect number : ${isPerfectNumber(33550336)}`)