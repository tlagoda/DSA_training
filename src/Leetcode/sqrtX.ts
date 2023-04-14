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
