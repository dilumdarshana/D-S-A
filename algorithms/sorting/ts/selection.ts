/**
 * Selection Sort — find the minimum element and swap it to the front.
 *
 * Each pass selects the smallest element from the unsorted portion.
 * Time: O(n²) (no early exit), Space: O(1)
 */

function selectionSort(nums: number[]): number[] {
  const arr = [...nums];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
