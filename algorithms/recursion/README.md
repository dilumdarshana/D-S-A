# Recursion

## What it is
A technique where a function calls itself to solve a smaller instance of the same problem.

## When to use
- Problem can be defined in terms of itself (factorial, Fibonacci, tree traversal)
- Divide-and-conquer approaches (merge sort, quick sort)
- Problems with a natural recursive structure (trees, graphs)
- When an iterative solution would require managing an explicit stack

## How it works
Every recursive function needs:
1. **Base case**: the simplest input that returns directly (stops recursion)
2. **Recursive case**: call the function with a smaller/simpler input

**Mental model**: the call stack — each call is pushed onto the stack, resolved from the top down.

## Variations
- **Linear recursion**: one recursive call (factorial)
- **Tree recursion**: multiple recursive calls (Fibonacci, tree traversal)
- **Tail recursion**: recursive call is the last operation (can be optimized into a loop)
- **Backtracking**: recursion with undo (exploring all possibilities)

## Complexity
| Example | Time | Space (stack) |
|---------|------|---------------|
| Factorial | O(n) | O(n) |
| Power (xⁿ) | O(n) | O(n) |
| Fibonacci (naive) | O(2ⁿ) | O(n) |

## Examples
- `ts/factorial.ts` — factorial and power function recursion
