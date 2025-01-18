// Create an array with some initial data
let dataArray = ["first", "second", "third", "fourth"];

console.log("Original array:", dataArray); // Output: ["first", "second", "third", "fourth"]

// Remove the first element from the array
let firstElement = dataArray.shift();
console.log("Removed first element:", firstElement); // Output: "first"
console.log("Array after removing first element:", dataArray); // Output: ["second", "third", "fourth"]

// Add the removed element to the end of the array
dataArray.push(firstElement);
console.log("Array after adding element to the end:", dataArray); // Output: ["second", "third", "fourth", "first"]