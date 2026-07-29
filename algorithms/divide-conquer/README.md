# Divide & Conquer

## What it is
A strategy that breaks a problem into smaller subproblems, solves each independently, and combines their results.

## When to use
- Problem can be partitioned into independent subproblems
- The combine step is straightforward
- Examples: sorting (merge, quick), fast exponentiation, binary search, closest pair of points

## How it works
1. **Divide**: split the input into two or more smaller parts
2. **Conquer**: solve each part recursively
3. **Combine**: merge the partial results into the final answer

## Complexity

| Problem | Time | Space |
|---------|------|-------|
| Fast power (xⁿ) | O(log n) | O(log n) |
| Merge sort | O(n log n) | O(n) |
| Quick sort | O(n log n) avg | O(log n) |

## Examples
- `ts/fast_power.ts` — O(log n) exponentiation using halving
