// Example: Using map, filter, and reduce
const numbers = [1, 2, 3, 4, 5];

// Map: Apply a function to each element.
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// Filter: Keep elements that pass a condition.
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// Reduce: Combine all elements into a single value.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
