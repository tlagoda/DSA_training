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
// Using bits manipulation

const getSingleNumberV2 = (nums: number[]): number => {
  let a = 0;
  for (const i of nums) {
    a ^= i;
  }
  return a;
};

// TESTING

const nums1 = [1, 1, 6, 6, 7];
const nums2 = [1, 1, 5, 5, 7, 7, 9, 9, 0, 0, 10, 10, 11, 11, 77];
const nums3 = [10];

console.log("getSingleNumber tests :");
console.log(`[${nums1}]: ${getSingleNumber(nums1)}`);
console.log(`[${nums2}]: ${getSingleNumber(nums2)}`);
console.log(`[${nums3}]: ${getSingleNumber(nums3)}\n`);

console.log("getSingleNumberV2 tests :");
console.log(`[${nums1}]: ${getSingleNumberV2(nums1)}`);
console.log(`[${nums2}]: ${getSingleNumberV2(nums2)}`);
console.log(`[${nums3}]: ${getSingleNumberV2(nums3)}`);