/*
    Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
    The returned integer should be non-negative as well.

    You must not use any built-in exponent function or operator.
*/

const squareRoot = (x: number) => {
  for (let i = 0; i <= x; i++) {
    if (i * i < x) {
      continue;
    } else if (i * i > x) {
      return i - 1;
    } else {
      return i;
    }
  }
};

// TESTING

console.log(`0: ${squareRoot(0)}`)
console.log(`9: ${squareRoot(9)}`)
console.log(`35344: ${squareRoot(35344)}`)
console.log(`187: ${squareRoot(187)}`)
console.log(`1000: ${squareRoot(1000)}`)