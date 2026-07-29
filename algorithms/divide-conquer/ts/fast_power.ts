/**
 * Divide & Conquer — fast exponentiation (xⁿ).
 *
 * Instead of multiplying n times (O(n)), split the problem in half:
 *   xⁿ = x^(n/2) * x^(n/2) for even n
 *   xⁿ = x * x^((n-1)/2) * x^((n-1)/2) for odd n
 * Time: O(log n), Space: O(log n)
 */

function power(x: number, n: number): number {
  if (n === 0) return 1;

  const half = power(x, Math.floor(n / 2));

  if (n % 2 === 0) return half * half;
  return x * half * half;
}

console.log(power(2, 10));  // 1024
console.log(power(3, 5));   // 243
console.log(power(5, 0));   // 1
console.log(power(7, 1));   // 7
