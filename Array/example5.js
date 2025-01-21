// A function that takes another function to apply to each element of an array
function processArray(array, action) {
    const result = [];
    for (let element of array) {
        result.push(action(element)); // Apply the action to each element
    }
    return result; // Return the transformed array
}

// A function to double the value
function double(num) {
    return num * 2;
}

// A function to square the value
function square(num) {
    return num * num;
}

// A function to add a fixed value
function addFive(num) {
    return num + 5;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];

console.log(processArray(numbers, double)); // Output: [2, 4, 6, 8, 10]
console.log(processArray(numbers, square)); // Output: [1, 4, 9, 16, 25]
console.log(processArray(numbers, addFive)); // Output: [6, 7, 8, 9, 10]
