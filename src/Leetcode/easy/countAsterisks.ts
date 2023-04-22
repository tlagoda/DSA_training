/*
    You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. 
    In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

    Return the number of '*' in s, excluding the '*' between each pair of '|'.

    Note that each '|' will belong to exactly one pair.
*/

const countAsterisks = (s: string): number => {
  let numOfBars = 0;
  let result = 0;
  for (let letter of s) {
    if (letter === "|") {
      numOfBars++;
    }
    if (letter === "*" && numOfBars % 2 === 0) {
      result++;
    }
  }
  return result;
};

