/**
 * Two Pointer — find a pair that sums to target in a sorted array.
 *
 * Technique: place one pointer at the start, one at the end.
 * Move inward based on the sum compared to the target.
 * Time: O(n), Space: O(1)
 */

function findPairSum(nums: number[], target: number): [number, number] | null {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) return [nums[left], nums[right]];
    else if (sum < target) left++;
    else right--;
  }

  return null;
}

console.log(findPairSum([1, 2, 3, 4, 6], 6)); // [2, 4]
console.log(findPairSum([1, 2, 3, 4, 6], 10)); // [4, 6]
console.log(findPairSum([1, 2, 3, 4, 6], 20)); // null
