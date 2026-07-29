/**
 * Longest Common Subsequence (LCS) — DP bottom-up
 *
 * Find the longest sequence that appears in the same order
 * in both strings (not necessarily contiguous).
 * Time: O(m * n), Space: O(m * n)
 */

function longestCommonSubsequence(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); // 3 ("ace")
console.log(longestCommonSubsequence("abc", "abc"));   // 3
console.log(longestCommonSubsequence("abc", "def"));   // 0
