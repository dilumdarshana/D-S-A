# Binary Search

## What it is
A search algorithm that finds the position of a target value within a **sorted** array by repeatedly dividing the search interval in half.

## When to use
- The input is sorted (or can be sorted)
- Searching for a specific value, first/last occurrence, or insertion point
- Problems where you can eliminate half the search space with a single comparison

## How it works
1. Point `left` at start, `right` at end
2. Compute `mid` = midpoint
3. If `arr[mid]` equals target → return
4. If target < `arr[mid]` → search left half (`right = mid - 1`)
5. Else → search right half (`left = mid + 1`)
6. Repeat until `left > right`

## Variations
- **Classic search**: find exact target or return -1
- **Lower bound / upper bound**: first/last position of a value
- **Binary search on answer**: search over a range of possible results (not an array)

## Complexity

| Case | Time | Space |
|------|------|-------|
| Average | O(log n) | O(1) |
| Worst | O(log n) | O(1) |

## Examples
- `ts/classic_search.ts` — standard binary search implementation
