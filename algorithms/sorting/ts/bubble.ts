/**
 * Bubble Sort — repeatedly swap adjacent elements if out of order.
 *
 * Each pass "bubbles" the largest remaining element to its correct position.
 * Time: O(n²), Space: O(1)
 */

function bubbleSort(nums: number[]): number[] {
  const arr = [...nums];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break; // already sorted
  }

  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
