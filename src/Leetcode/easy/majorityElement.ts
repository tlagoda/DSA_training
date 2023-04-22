/*
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. 
    You may assume that the majority element always exists in the array.
*/

const getMajorityElement = (nums: number[]): number => {
  return nums.sort()[
    nums.length % 2 === 0 ? nums.length / 2 : (nums.length + 1) / 2
  ];
};

