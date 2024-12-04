/**
 * Find nearest duplicates for a given range k
 */

function findNearestDuplicate(nums: number[], k: number): boolean {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);

    if (set.size > k) set.delete(nums[i - k]);
  }

  return false;
}

// call function
console.log(findNearestDuplicate([1,2,3,1], 3)); // Output: true (duplicates found within range 1-3)
