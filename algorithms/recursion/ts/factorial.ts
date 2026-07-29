/**
 * Recursion — Factorial
 *
 * A recursive function calls itself with a smaller input.
 * Every recursion needs:
 *  1. Base case — stops the recursion
 *  2. Recursive case — calls itself moving toward the base
 */

function factorial(n: number): number {
  if (n <= 1) return 1;   // base case
  return n * factorial(n - 1); // recursive case
}

// Call stack for factorial(4):
//   factorial(4) → 4 * factorial(3)
//     factorial(3) → 3 * factorial(2)
//       factorial(2) → 2 * factorial(1)
//         factorial(1) → 1
//       ← 2 * 1 = 2
//     ← 3 * 2 = 6
//   ← 4 * 6 = 24

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1

/**
 * Recursion — Power (xⁿ)
 */

function power(base: number, exp: number): number {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 10)); // 1024
