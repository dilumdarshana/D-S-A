# Backtracking

## What it is
A brute-force technique that builds candidates incrementally and abandons a candidate ("backtracks") as soon as it determines the candidate cannot lead to a valid solution.

## When to use
- Problems that ask for all solutions, not just one
- Constraint satisfaction (N-Queens, Sudoku)
- Combinatorial search (subsets, permutations, combinations)
- Decision problems with multiple paths where invalid paths can be detected early

## How it works
1. Start with an empty solution
2. Make a choice (extend the solution)
3. Recurse (move forward)
4. If the current choice is invalid:
   - Undo the choice (backtrack)
   - Try another choice

## Variations
- **DFS on trees**: backtracking over tree paths (find node, max depth, path sum)
- **BFS on trees**: level-by-level search instead of depth-first
- **Constraint backtracking**: more complex pruning (N-Queens, Sudoku)

## Complexity
| Case | Time | Space |
|------|------|-------|
| Worst | O(branches^depth) | O(depth) |

## Examples
- `ts/dfs_find1.ts` — DFS to find a value in an n-ary tree
- `ts/dfs_find2.ts` — DFS to find a value in a binary tree
- `ts/dfs_max_depth.ts` — find the maximum depth of a binary tree
- `ts/dfs_target_sum.ts` — determine if root-to-leaf path sums to target
- `ts/bfs_find1.ts` — BFS to find a value in an n-ary tree
