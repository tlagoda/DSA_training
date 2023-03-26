/*
Is Unique? : Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? 
*/

const prompt = require('prompt-sync')({sigint: true})

const hasAllUniqueCharacters = (input) => {
  // we create an array to store the characters we have already encountered once
  const charAlreadyEncountered = [];

  // when we encounter a character, we store it in the array
  for (const letter of input.split("")) {
    // if the charCode is already in the array, then the char is not unique
    if (charAlreadyEncountered[letter.charCodeAt()] === false) {
      return false;
    }
    charAlreadyEncountered[letter.charCodeAt()] = false;
  }
  return true;
};

const input = prompt('Enter a string : ')
console.log(hasAllUniqueCharacters(input))