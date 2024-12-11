/**
 * Good for small list. Since time complexity is O(n2) will be problematic for last data set
 * Algorithm (ascending order): compare current element with previous element and if the current element is greater
 * than the previous element, then swap the elements. Keep doing this until the previous element is greater than the current
 * element
 */

function insertion_sort(nums: number[]): number[] {
  let j = 0;
  let i = 0;

  for (let n = 1; n < nums.length; n++) {
    j = n -1;
    i = n;

    while (j >= 0) {
      if (nums[i] < nums[j]) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
      }
      j--;
      i--;
    }
  }

  return nums;
}

// call function
console.log(insertion_sort([12, 11, 13, 5, 6]));
