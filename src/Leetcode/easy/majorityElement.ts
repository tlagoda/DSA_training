/*
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. 
    You may assume that the majority element always exists in the array.
*/

const getMajorityElement = (nums: number[]): number => {
  const map = new Map();
  for (let num of nums) {
    let freq = (map.get(num) ?? 0) + 1;
    map.set(num, freq);
    if (freq > nums.length / 2) return num;
  }
};

// TESTING
console.log(
  `Majority element in [1,2,3,1,1,4] is : ${getMajorityElement([
    1, 2, 3, 1, 1, 4,
  ])}`
);
console.log(
  `Majority element in [1,2,3,1,1,4,5,5,5,5,5] is : ${getMajorityElement([
    1, 2, 3, 1, 1, 4, 5, 5, 5, 5, 5,
  ])}`
);
