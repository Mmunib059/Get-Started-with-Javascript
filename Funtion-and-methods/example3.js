function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    const name = "Muneeb"; // Simulating user input
    console.log(callback(name));
}

processUserInput(greet);
