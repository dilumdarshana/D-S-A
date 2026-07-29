# Sorting

## What it is
Arranging elements in a specific order (typically ascending or descending).

## When to use
- Required as a preprocessing step for other algorithms (binary search, two-pointer)
- Organizing data for display or further processing

## How it works
Each algorithm uses a different strategy:

| Algorithm | Strategy |
|-----------|----------|
| **Bubble** | Repeatedly swap adjacent elements if out of order |
| **Selection** | Find the minimum element, swap it to the front |
| **Insertion** | Build sorted portion one element at a time by inserting into correct position |
| **Merge** | Divide array in half, sort each half recursively, merge |
| **Quick** | Pick a pivot, partition around it, recurse |

## Complexity

| Algorithm | Average | Worst | Space |
|-----------|---------|-------|-------|
| Bubble | O(n²) | O(n²) | O(1) |
| Selection | O(n²) | O(n²) | O(1) |
| Insertion | O(n²) | O(n²) | O(1) |
| Merge | O(n log n) | O(n log n) | O(n) |
| Quick | O(n log n) | O(n²) | O(log n) |

## Examples
- `ts/bubble.ts` — bubble sort with early-exit optimization
- `ts/selection.ts` — selection sort
- `ts/insertion.ts` — insertion sort for small/partially sorted data
- `ts/merge.ts` — merge sort (divide, recurse, merge)
- `ts/quick.ts` — quick sort with last-element pivot
