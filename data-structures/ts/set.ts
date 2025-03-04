// unit set of values
// usage: remove duplicates from an array

// make unique array
const uniqueSet = new Set([1, 1, 2, 4, 5, 6]); // output: [1, 2, 4, 5, 6]

// setters and getters
const set = new Set();

// add elements
set.add(1);
set.add(2);
set.add(3);

// check if element exists
console.log(set.has(1)); // output: true

// remove elements
set.delete(2);

// iterate over set
for (const num of set) {
  console.log(num); // output: 1, 3
}

// size of set
console.log(set.size); // output: 2
