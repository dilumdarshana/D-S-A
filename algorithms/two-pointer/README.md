# Two Pointer

## What it is
A technique that uses two pointers (indices) to traverse a data structure, typically moving toward each other or at different speeds.

## When to use
- Sorted arrays (pair sums, removing duplicates, merging)
- Palindrome checking
- Linked list cycle detection
- Problems requiring O(n) time and O(1) extra space

## How it works
Two main variants:

1. **Two pointers (opposite direction)**: one at start, one at end. Move inward based on a condition. Used for pair sums, palindrome, trapping rain water.

2. **Fast & slow pointers (same direction)**: one moves 1 step, the other 2 steps. Used for cycle detection, finding middle of linked list.

## Variations
- **Pair sum**: find two numbers that add up to target in a sorted array
- **Cycle detection**: detect if a linked list has a cycle (Floyd's algorithm)
- **In-place reversal**: reverse array or linked list in place
- **Partitioning**: separate elements based on a condition (Dutch national flag)

## Complexity

| Variation | Time | Space |
|-----------|------|-------|
| Opposite direction | O(n) | O(1) |
| Fast & slow | O(n) | O(1) |

## Examples
- `ts/two_pointer.ts` — find pair that sums to target in sorted array
- `ts/fast_and_slow.ts` — detect cycle in linked list
- `python/two_pointer.py` — two-pointer examples in Python
