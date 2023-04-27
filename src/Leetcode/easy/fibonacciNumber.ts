/*
    The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
    such that each number is the sum of the two preceding ones, starting from 0 and 1. 
    That is :
    F(0) = 0, F(1) = 1
    F(n) = F(n - 1) + F(n - 2), for n > 1.

    Given n, calculate F(n).
*/

interface Memo {
  n?: Number;
}
let i = 0
const getFibonacciNumber = (n: number, memo: Memo): number => {
  memo = memo || {};
  i++
  if (memo[n]) return memo[n];
  if (n <= 1) return n;

  return memo[n] = getFibonacciNumber(n - 1, memo) + getFibonacciNumber(n - 2, memo);
};

// TESTING

const nums = [3, 7, 10, 15, 20, 30, 40, 50, 60, 70];
nums.forEach((num) => {
  console.log(`n = ${num}, Fibonacci Number = ${getFibonacciNumber(num, {})}`);
});
