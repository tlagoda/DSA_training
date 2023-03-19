/*
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). 
*/

const string1 = "hello";
const string2 = "hello woooooorldddddd !!!";

const compressString = (input) => {
  let compressedString = "";
  let count = 0;

  for (let i = 0; i < input.split("").length; i++) {
    count++;

    // when the characters are different or 
    // if we reach the end of the array, we concatenate the result
    if (
      i + 1 >= input.split("").length ||
      input.split("")[i] !== input.split("")[i + 1]
    ) {
      compressedString += input.split("")[i] + `${count}`;
      count = 0;
    }
  }

  return compressedString.length < input.length ? compressedString : input;
};

console.log(compressString(string1));
console.log(compressString(string2));
