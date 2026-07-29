/**
 * 0/1 Knapsack — DP bottom-up
 *
 * Given items with weights and values, find max value
 * that fits in a capacity W. Each item can be taken once.
 * Time: O(n * W), Space: O(n * W)
 */

interface Item {
  weight: number;
  value: number;
}

function knapsack(items: Item[], capacity: number): number {
  const n = items.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];

    for (let w = 0; w <= capacity; w++) {
      if (weight <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const items: Item[] = [
  { weight: 2, value: 3 },
  { weight: 3, value: 4 },
  { weight: 4, value: 5 },
  { weight: 5, value: 6 },
];

console.log(knapsack(items, 5)); // 7 (items 0 + 1)
console.log(knapsack(items, 8)); // 10 (items 1 + 2)
