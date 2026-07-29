# Dynamic Programming

## What it is
An optimization technique that solves problems by breaking them into overlapping subproblems, solving each subproblem once, and storing the result (memoization or tabulation).

## When to use
- Problem asks for optimal value (max, min, shortest, longest)
- Problem can be broken into subproblems that overlap
- Subproblem decisions affect future options (optimal substructure)
- Classic hints: "number of ways", "maximum profit", "minimum cost"

## How it works
**Two approaches:**
1. **Top-down (memoization)**: recurse naturally, cache results before returning
2. **Bottom-up (tabulation)**: fill a table iteratively from base cases upward

**Key steps:**
1. Define the subproblem (what does `dp[i]` represent?)
2. Find recurrence relation (how does `dp[i]` relate to previous values?)
3. Compute base cases
4. Build up to the final answer

## Variations
- **1D DP**: Fibonacci, climbing stairs — single state dimension
- **2D DP**: Knapsack, LCS — two state dimensions (item index + capacity/position)
- **Space-optimized**: discard the full table, keep only the last row(s)

## Complexity
| Problem | Time | Space |
|---------|------|-------|
| Fibonacci (memo) | O(n) | O(n) |
| Fibonacci (tab) | O(n) | O(n) |
| Fibonacci (opt) | O(n) | O(1) |
| 0/1 Knapsack | O(n*W) | O(n*W) |
| LCS | O(m*n) | O(m*n) |

## Examples
- `ts/fibonacci.ts` — memoization, tabulation, and space-optimized approaches
- `ts/knapsack.ts` — 0/1 knapsack bottom-up DP
- `ts/lcs.ts` — longest common subsequence between two strings
