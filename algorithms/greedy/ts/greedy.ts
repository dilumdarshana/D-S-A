/**
 * Greedy — minimum number of coins for a target amount.
 *
 * Strategy: always pick the largest coin ≤ remaining amount.
 * Works optimally when coin denominations are canonical (e.g. USD).
 * Time: O(n), Space: O(1)
 */

function minCoins(coins: number[], amount: number): number {
  coins.sort((a, b) => b - a); // descending
  let count = 0;
  let remaining = amount;

  for (const coin of coins) {
    if (remaining === 0) break;
    const take = Math.floor(remaining / coin);
    count += take;
    remaining -= take * coin;
  }

  return remaining === 0 ? count : -1;
}

// USD coins
const usd = [1, 5, 10, 25];
console.log(minCoins(usd, 99)); // 9 (25+25+25+10+10+1+1+1+1)

// non-canonical — greedy may fail
console.log(minCoins([1, 3, 4], 6)); // 3 (4+1+1) — optimal is 2 (3+3)
