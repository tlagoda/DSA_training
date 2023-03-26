/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other. 

Case sensitive: false
Taking white spaces into account: true
*/

const prompt = require('prompt-sync')({sigint: true})

const arePermutations = (string1, string2) => {
    // if the strings are not the same size, one cannot be a permutation of the other
    if (string1.length !== string2.length) {
        return false
    }

    // first, we sort the strings
    const sorted1 = string1.toLowerCase().split('').sort()
    const sorted2 = string2.toLowerCase().split('').sort()

    // then we compare the sorted strings
    // note: we cannot compare arrays directly
    return JSON.stringify(sorted1) === JSON.stringify(sorted2)
}

const str1 = prompt('Enter string1 : ')
const str2 = prompt('Enter string2 : ')
console.log(arePermutations(str1, str2))