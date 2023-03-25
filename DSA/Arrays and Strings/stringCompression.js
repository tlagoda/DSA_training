/*
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/

const prompt = require('prompt-sync')({sigint: true})

const compressString = (input) => {
  const inputArray = input.split('')
  let compressedString = "";
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    count++;

    // when the characters are different or 
    // if we reach the end of the array, we concatenate the result
    if (
      i + 1 >= inputArray.length ||
      inputArray[i] !== inputArray[i + 1]
    ) {
      compressedString += inputArray[i] + `${count}`;
      count = 0;
    }
  }

  return compressedString.length < input.length ? compressedString : input;
};
