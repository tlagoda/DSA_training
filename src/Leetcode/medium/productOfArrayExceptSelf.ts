/*
Given an integer array nums, return an array answer such that answer[i] is equal 
to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

const getProductOfArray = (nums: number[]) => {
  const left: number[] = [1];
  const right: number[] = [1];
  let result: number[] = [];
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = 1; i < nums.length; i++) {
    right[i] = right[i - 1] * nums[nums.length - i];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[nums.length - 1 - i];
  }
  return result;
};

// TESTING
