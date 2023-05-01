/*
    Given a non-empty array of integers nums, every element appears twice except for one. 
    Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

const getSingleNumber = (nums: number[]): number => {
  const map = new Map<number, boolean>();
  for (const num of nums) {
    if (map.get(num)) {
      map.delete(num);
    } else {
      map.set(num, true);
    }
  }
  return map.keys().next().value;
};

// Solution for linear runtime complexity and use only constant extra space

const getSingleNumberV2 = (nums: number[]): number => {
  let a = 0;
  for (const i of nums) {
    a ^= i;
  }
  return a;
};

