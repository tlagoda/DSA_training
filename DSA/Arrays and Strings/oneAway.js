/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false 
*/

const string1 = "pow";
const string2 = "row";
const string3 = "hello";
const string4 = "hell";
const string5 = "abcd";
const string6 = "abcde";
const string7 = "javascript";

const areOneEditAway = (string1, string2) => {
  // we check the length difference
  if (Math.abs(string1.length - string2.length) > 1) {
    return false;
  }
  // if strings are the same length, we check for replacement
  else if (string1.length === string2.length) {
    let oneDifferenceHasBeenEncountered = false;
    string1.split("").forEach((letter, index) => {
      // when we encounter one difference, we check if one has already been encountered
      if (letter !== string2.split("")[index]) {
        // if so, we return false
        if (oneDifferenceHasBeenEncountered) {
          return false;
        }
        oneDifferenceHasBeenEncountered = true;
      }
    });
    return true;
  } else if (string1.length - 1 === string2.length) {
    // here, we check for insertion
    return checkInsertionOrDeletion(string1, string2);
  } else if (string1.length + 1 === string2.length) {
    //here, for deletion
    return checkInsertionOrDeletion(string2, string1);
  } else {
    return string1 === string2;
  }
};

const checkInsertionOrDeletion = (string1, string2) => {
  let index1 = 0;
  let index2 = 0;
  while (index1 < string1.length && index2 < string2.length) {
    // if two characters are not equals for the second time, we return false
    // if it's the first time, we shift the index
    if (string1.split("")[index1] !== string2.split("")[index2]) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

console.log(areOneEditAway(string1, string2));
console.log(areOneEditAway(string3, string4));
console.log(areOneEditAway(string5, string6));
console.log(areOneEditAway(string1, string7));
