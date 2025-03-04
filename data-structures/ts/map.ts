// use to store key value pairs

// create a new Map
const map = new Map();

// add key-value pairs
map.set('key1', 'value1');
map.set('key2', 'value2');

// get values by keys
console.log(map.get('key1')); // output: value1
console.log(map.get('key2')); // output: value2

// check if key exists
console.log(map.has('key1')); // output: true
console.log(map.has('key3')); // output: false

// remove key-value pairs
map.delete('key1');

// iterate over Map
for (const [key, value] of map) {
  console.log(key, value); // output: key2 value2
}

// size of Map
console.log(map.size); // output: 1

// Map with objects as values
const mapWithObjects = new Map();

const obj1 = { name: 'John', age: 30 };
const obj2 = { name: 'Alice', age: 25 };

mapWithObjects.set(obj1, 'John');
