/**
 * Dynamic Programming — Fibonacci
 *
 * Two DP approaches:
 *  1. Top-down (memoization): cache results of subproblems
 *  2. Bottom-up (tabulation): build from base cases
 *
 * Naive recursion is O(2ⁿ). DP brings it to O(n).
 */

// 1. Top-down with memoization
function fibMemo(n: number, memo: Record<number, number> = {}): number {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// 2. Bottom-up with tabulation
function fibTab(n: number): number {
  if (n <= 1) return n;

  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 3. Space-optimized (constant space)
function fibOpt(n: number): number {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

console.log(fibMemo(10)); // 55
console.log(fibTab(10));  // 55
console.log(fibOpt(10));  // 55
