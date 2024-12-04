/**
 * Find maximun sum of all sub arrays of size k
 */

function findMaxSum(nums: number[], k: number): number {
  // window size is k
  let maxSum = 0;

  // calculate initial sum
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // sliding window
  for (let j = 1; j < nums.length; j++) {
    sum += nums[j+k-1] - nums[j-1];

    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
}

// call function
console.log(findMaxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
