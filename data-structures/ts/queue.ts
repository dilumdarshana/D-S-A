// Queue — FIFO (First In, First Out) using built-in Array

const queue: number[] = [];

// enqueue — O(1)
queue.push(1);
queue.push(2);
queue.push(3);

// dequeue — O(n) for array (shifts all elements)
const first = queue.shift();
console.log(first); // 1

// peek at front
console.log(queue[0]); // 2

// size
console.log(queue.length); // 2

// For O(1) dequeue, use a linked list or a dedicated Queue class.
