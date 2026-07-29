# Sliding Window

## What it is
A technique that maintains a contiguous subarray (window) of elements and slides it across the input to compute something in O(n) time instead of O(n²).

## When to use
- Subarray or substring problems (contiguous elements)
- Problems involving "longest", "shortest", "maximum sum" within a window
- Fixed or variable window size

## How it works
1. Expand the right edge of the window to include new elements
2. Shrink the left edge when constraints are violated
3. Track the answer as the window moves

## Variations
- **Fixed-size window**: window size k is known ahead of time (max sum of k elements)
- **Dynamic-size window**: window expands/shrinks based on a condition
- **With hashmap**: track element frequencies to detect duplicates or patterns

## Complexity

| Variation | Time | Space |
|-----------|------|-------|
| Fixed size | O(n) | O(1) |
| With hashmap | O(n) | O(k) |

## Examples
- `ts/fixed_size.ts` — max sum of all subarrays of size k
- `ts/sliding_with_hashmap.ts` — detect nearby duplicates within range k
