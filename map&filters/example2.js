function doubleNumbers(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const doubled = doubleNumbers(numbers);
console.log(doubled); // Output: [2, 4, 6, 8, 10]