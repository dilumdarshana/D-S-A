// Stack — LIFO (Last In, First Out) using built-in Array

const stack: number[] = [];

// push — O(1)
stack.push(1);
stack.push(2);
stack.push(3);

// pop — O(1)
const last = stack.pop();
console.log(last); // 3

// peek at top
console.log(stack[stack.length - 1]); // 2

// size
console.log(stack.length); // 2

// check empty
console.log(stack.length === 0); // false
