// Given an array of numbers, find the sum of all even numbers in the array.

// Example array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to calculate the sum of even numbers
function sumEvenNumbers(arr) {
    // Filter out the even numbers and sum them up
    return arr
        .filter(num => num % 2 === 0) // Keep only even numbers
        .reduce((sum, num) => sum + num, 0); // Add them together
}

// Call the function and log the result
const result = sumEvenNumbers(numbers);
console.log("Sum of even numbers:", result);


