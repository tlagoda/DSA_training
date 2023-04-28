/*
    Given a sorted array of distinct integers and a target value, 
    return the index if the target is found. If not, return the index where it 
    would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsertPosition = (nums: number[], target: number): number => {
  let middle = 0;
  let left = 0;
  let right = nums.length - 1;

  // we use binary search algorithm
  while (left <= right) {
    middle = Math.floor(left + (right - left) / 2);
    if (nums[middle] === target) return middle;
    if (target < nums[middle]) right = middle - 1;
    else left = middle + 1;
  }
  // if target is not found, we return its hypothetical index
  return left;
};

// TESTING

const nums = [1, 3, 5, 6];
const targets = [5, 2, 7];
for (const target of targets) {
    console.log(`nums: ${nums} | target: ${target}`)
    console.log(`index: ${searchInsertPosition(nums, target)}`)
    console.log('---------------------------------')
}
