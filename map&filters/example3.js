Array.prototype.customMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Example usage:
const numbers = [1, 2, 3, 4];
const doubled = numbers.customMap(function(number) {
    return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]