/*
Is Unique ? : Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? 
*/

const myString = "hello world!";

const hasAllUniqueCharacters = (input) => {
  const charAlreadyEncountered = [];
  for (const letter of input.split("")) {
    if (charAlreadyEncountered[letter.charCodeAt()] === false) {
      return false;
    }
    charAlreadyEncountered[letter.charCodeAt()] = false;
  }
  return true;
};

console.log(hasAllUniqueCharacters(myString));
