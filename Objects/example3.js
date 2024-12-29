/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// Define the class
class WritingTool {
    constructor(type, brand, color, inkLevel, isRefillable) {
      this.type = type; // e.g., pen, pencil, marker
      this.brand = brand; // e.g., Parker, Bic
      this.color = color; // e.g., blue, black, red
      this.inkLevel = inkLevel; // percentage of ink remaining (0 to 100)
      this.isRefillable = isRefillable; // boolean
    }
  
    // Method to write and decrease ink level
    write(amount) {
      if (this.inkLevel <= 0) {
        console.log(`The ${this.type} is out of ink!`);
      } else {
        this.inkLevel -= amount;
        if (this.inkLevel < 0) this.inkLevel = 0;
        console.log(
          `You wrote with the ${this.type}. Ink level is now at ${this.inkLevel}%.`
        );
      }
    }
  
    // Method to refill the ink
    refill() {
      if (this.isRefillable) {
        this.inkLevel = 100;
        console.log(`The ${this.type} has been refilled.`);
      } else {
        console.log(`The ${this.type} is not refillable.`);
      }
    }
  
    // Method to describe the writing tool
    describe() {
      console.log(
        `This is a ${this.color} ${this.type} by ${this.brand}. Ink level: ${this.inkLevel}%. Refillable: ${this.isRefillable}`
      );
    }
  }
  
  // Create several objects using the class
  const pen = new WritingTool("pen", "Parker", "blue", 80, true);
  const pencil = new WritingTool("pencil", "Faber-Castell", "black", 0, false);
  const marker = new WritingTool("marker", "Sharpie", "red", 50, true);
  
  // Test the objects
  console.log("Testing Writing Tools:");
  
  pen.describe();
  pen.write(30); // Decrease ink level
  pen.refill(); // Refill ink
  pen.describe();
  
  pencil.describe();
  pencil.write(10); // Cannot write, ink level is 0
  pencil.refill(); // Not refillable
  
  marker.describe();
  marker.write(60); // Decrease ink level
  marker.refill(); // Refill ink
  marker.describe();
  