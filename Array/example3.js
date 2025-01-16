// Create an array
const fruits = ["Apple", "Banana", "Cherry"];

// Access elements in the array
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// Add an element to the end of the array
fruits.push("Date");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// Remove the last element from the array
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: Date
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Add an element to the beginning of the array
fruits.unshift("Elderberry");
console.log(fruits); // Output: ["Elderberry", "Apple", "Banana", "Cherry"]

// Remove the first element from the array
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: Elderberry
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Find the index of an element in the array
const index = fruits.indexOf("Banana");
console.log(index); // Output: 1

// Remove an element by index
const removedFruit = fruits.splice(index, 1);
console.log(removedFruit); // Output: ["Banana"]
console.log(fruits); // Output: ["Apple", "Cherry"]

// Iterate over the array
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Cherry