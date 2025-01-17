// Declare variables using var, let, and const
var name = "John Doe";
let age = 30;
const isStudent = true;

// Output the variables
console.log("Name:", name); // Output: Name: John Doe
console.log("Age:", age); // Output: Age: 30
console.log("Is Student:", isStudent); // Output: Is Student: true

// Modify the variables
name = "Jane Doe";
age = 25;
// isStudent = false; // This will cause an error because isStudent is a constant

// Output the modified variables
console.log("Modified Name:", name); // Output: Modified Name: Jane Doe
console.log("Modified Age:", age); // Output: Modified Age: 25

// Example of variable scope
function displayInfo() {
  var localVar = "I am local";
  console.log("Inside function - Name:", name); // Output: Inside function - Name: Jane Doe
  console.log("Inside function - Local Variable:", localVar); // Output: Inside function - Local Variable: I am local
}

displayInfo();

// console.log("Outside function - Local Variable:", localVar); // This will cause an error because localVar is not defined outside the function

// Example of block scope with let and const
if (true) {
  let blockVar = "I am block scoped";
  const blockConst = "I am also block scoped";
  console.log("Inside block - Block Variable:", blockVar); // Output: Inside block - Block Variable: I am block scoped
  console.log("Inside block - Block Constant:", blockConst); // Output: Inside block - Block Constant: I am also block scoped
}

// console.log("Outside block - Block Variable:", blockVar); // This will cause an error because blockVar is not defined outside the block
// console.log("Outside block - Block Constant:", blockConst); // This will cause an error because blockConst is not defined outside the block