// A function that filters an array based on a condition
function filterArray(array, condition) {
    const result = [];
    for (let element of array) {
        if (condition(element)) {
            result.push(element);
        }
    }
    return result;
}

// Condition functions
function isEven(num) {
    return num % 2 === 0;
}

function isGreaterThanThree(num) {
    return num > 3;
}

// Usage
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterArray(numbers, isEven)); // Output: [2, 4, 6]
console.log(filterArray(numbers, isGreaterThanThree)); // Output: [4, 5, 6]
