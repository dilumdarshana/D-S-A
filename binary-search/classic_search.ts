function binarySearch(nums: number[], target: number): number {
  const arrSorted = nums.sort();

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arrSorted[mid] === target) return mid;
      else if (target < arrSorted[mid]) {
          right = mid - 1;
      } else if (target > arrSorted[mid]) {
          left = mid + 1;
      }
  }

  return -1;
}

const res = binarySearch([3, 4, 1, 6, -1], 6);
console.log(res)