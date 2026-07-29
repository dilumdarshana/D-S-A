// Common Array operations

// declaration
const nums: number[] = [1, 2, 3];
const words = new Array<string>("a", "b", "c");

// add / remove at end — O(1)
nums.push(4);     // [1, 2, 3, 4]
nums.pop();       // [1, 2, 3]

// add / remove at front — O(n) (shifts elements)
nums.unshift(0);  // [0, 1, 2, 3]
nums.shift();     // [1, 2, 3]

// find index — O(n)
console.log(nums.indexOf(2));  // 1

// check existence — O(n)
console.log(nums.includes(2)); // true

// slice (copy portion, does not mutate)
const slice = nums.slice(0, 2); // [1, 2]

// splice (mutate — insert / remove at index)
const removed = nums.splice(1, 1);       // remove 1 element at index 1
console.log(nums);                        // [1, 3]
nums.splice(1, 0, 5);                    // insert 5 at index 1
console.log(nums);                        // [1, 5, 3]

// iteration
for (const n of nums) console.log(n);
nums.forEach((n, i) => console.log(i, n));

// transform
const doubled = nums.map((n) => n * 2);   // [2, 10, 6]
const evens = nums.filter((n) => n % 2 === 0); // []
const sum = nums.reduce((acc, n) => acc + n, 0); // 9

// sort (always pass compare function for numbers)
const unsorted = [3, 1, 10, 2];
unsorted.sort((a, b) => a - b); // [1, 2, 3, 10]
