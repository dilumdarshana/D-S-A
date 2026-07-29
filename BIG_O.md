# Big O Notation

A way to describe how runtime (or memory) grows as input size increases.

- Measures **growth rate**, not actual seconds
- Drops constants and lower-order terms: O(2n + 5) → O(n)
- Always considers the **worst case** unless stated otherwise

## Common complexity classes

| Class | Name | Example |
|-------|------|---------|
| O(1) | Constant | Array index lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single loop |
| O(n log n) | Linearithmic | Merge sort, quick sort |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Fibonacci (naive recursion) |
| O(n!) | Factorial | Generating all permutations |

![Visual growth chart](https://github.com/user-attachments/assets/53d7ea4a-8078-4b7b-9901-69c262369883)

## Data structure operation costs

| Structure | Access | Search | Insert | Delete |
|-----------|--------|--------|--------|--------|
| Array | O(1) | O(n) | O(n)* | O(n)* |
| Stack | O(n) | O(n) | O(1) | O(1) |
| Queue | O(n) | O(n) | O(1) | O(1) |
| Singly linked list | O(n) | O(n) | O(1)** | O(n) |
| Binary Search Tree | O(log n)† | O(log n)† | O(log n)† | O(log n)† |
| Heap | O(1)‡ | O(n) | O(log n) | O(log n)§ |
| Hash Map | O(1)†† | O(1)†† | O(1)†† | O(1)†† |
| Trie | O(k) | O(k) | O(k) | O(k) |

\* Insert/delete at front is O(n); at end is O(1) amortized.
\** Insert at head is O(1); at tail is O(n) without a tail pointer.
† Average case. Worst case O(n) (skewed tree).
‡ Peek at min/max is O(1); random access is O(n).
§ Extract min/max is O(log n); arbitrary deletion is O(n).
†† Average case. Worst case O(n) with collisions.

## Algorithm pattern costs

| Pattern | Time | Space | Notes |
|---------|------|-------|-------|
| Binary search | O(log n) | O(1) | Input must be sorted |
| Two pointer | O(n) | O(1) | Sorted input for pair-sum |
| Sliding window (fixed) | O(n) | O(1) | |
| Sliding window (hashmap) | O(n) | O(k) | k = window size |
| Backtracking (DFS/BFS) | O(branches^depth) | O(depth) | |
| Dynamic programming | O(states × choices) | O(states) | Varies by problem |
| Greedy | O(n) or O(n log n) | O(1) | Not always optimal |
| Sorting (comparison) | O(n log n) avg | O(1) to O(n) | |
| Graph BFS/DFS | O(V + E) | O(V) | |
| Dijkstra | O((V + E) log V) | O(V) | With binary heap |
| Union-Find | O(α(n)) | O(n) | α = inverse Ackermann |

## Space vs time tradeoff

- **More memory → faster**: memoization, hash tables, prefix sums
- **Less memory → slower**: in-place algorithms, recursive without memo

Rule of thumb: if you're computing the same thing repeatedly, cache it.
