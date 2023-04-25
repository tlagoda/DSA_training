/*
    Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".
*/

const longestCommonPrefix = (strs: string[]): string => {
  let compared = strs[0];

  for (const str of strs) {
    for (let i = 0; i < compared.length; i++) {
      if (str[i] === compared[i]) {
        continue;
      } else {
        compared = str.slice(0, i);
      }
    }
  }

  return compared;
};

console.log(longestCommonPrefix(["abcd", "abcdefg", "abc", "ab"]));
