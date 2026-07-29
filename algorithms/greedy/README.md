# Greedy

## What it is
A strategy that makes the **locally optimal** choice at each step, hoping it leads to a globally optimal solution.

## When to use
- The problem has the **greedy-choice property**: a global optimum can be reached by making locally optimal choices
- Optimal substructure: the optimal solution contains optimal solutions to subproblems
- Classic hints: "minimum number of coins", "maximum profit with one pass", "interval scheduling"

## How it works
1. At each step, evaluate available choices
2. Pick the one that looks best **right now**
3. Never reconsider past choices
4. Repeat until done

**Important**: greedy does not always yield the optimal solution. Verify the greedy-choice property first.

## Variations
- **Coin change**: pick largest coin first (works for canonical denominations)
- **Interval scheduling**: pick the interval that ends earliest
- **Buy/sell stock**: track min price so far, compute max profit

## Complexity
| Case | Time | Space |
|------|------|-------|
| Typical | O(n log n) or O(n) | O(1) |

## Examples
- `ts/greedy.ts` — minimum coins for a target amount
- `python/simple.py` — best time to buy and sell stock
