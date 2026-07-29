/**
 * Quick Sort — divide and conquer with a pivot.
 *
 * Pick a pivot, partition so elements ≤ pivot go left, > go right.
 * Recurse on each partition.
 * Time: O(n log n) average, O(n²) worst. Space: O(log n)
 */

function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 80, 30, 90, 40, 50, 70]));
