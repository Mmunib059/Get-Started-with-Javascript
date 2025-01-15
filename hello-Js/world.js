// **Variables**
let greeting = "Hello, World!"; // A string variable
let number = 42; // A number variable
let isJavaScriptFun = true; // A boolean variable

// **Function**
function displayMessage(message) {
    console.log(message); // Logs the message to the console
}

// **Calling the Function**
displayMessage(greeting); // Output: Hello, World!
displayMessage("The answer to life is: " + number); // Output: The answer to life is: 42
displayMessage("Is JavaScript fun? " + isJavaScriptFun); // Output: Is JavaScript fun? true

// **Conditional Statement**
if (isJavaScriptFun) {
    console.log("Yes, JavaScript is fun!"); // Output: Yes, JavaScript is fun!
} else {
    console.log("JavaScript is not fun?");
}

// **Loop**
for (let i = 1; i <= 5; i++) {
    console.log("Counting: " + i); // Output: Counting: 1, 2, 3, 4, 5
}