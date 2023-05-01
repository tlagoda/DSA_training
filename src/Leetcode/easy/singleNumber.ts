/*
    Given a non-empty array of integers nums, every element appears twice except for one. 
    Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

import { HashTable } from "../../utils/Data_Structures/HashTable.ts";

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

