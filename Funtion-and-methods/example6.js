// A function that takes another function as an argument
function performAction(action, name) {
    console.log("Performing action...");
    action(name); // Call the passed function
}

// A function to pass as an argument
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Another function to pass as an argument
function farewell(name) {
    console.log(`Goodbye, ${name}!`);
}

// Using the performAction function
performAction(greet, "Muneeb"); // Output: Performing action... Hello, Muneeb!
performAction(farewell, "Muneeb"); // Output: Performing action... Goodbye, Muneeb!
