// Create JavaScript objects based on objects in your current environment.
/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Backpack object
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
  
  console.log("The backpack object:", backpack);
  console.log("The pocketNum value:", backpack.pocketNum);
  
  console.log("Left strap length before:", backpack.strapLength.left);
  
  backpack.newStrapLength(10, 15);
  
  console.log("Left strap length after:", backpack.strapLength.left);
  
  // Example: Create another object based on a real-world item
  const desk = {
    name: "Study Desk",
    material: "Wood",
    dimensions: {
      length: 120,
      width: 60,
      height: 75,
    },
    drawerCount: 3,
    hasLamp: true,
    adjustHeight: function (newHeight) {
      this.dimensions.height = newHeight;
    },
  };
  
  console.log("The desk object:", desk);
  console.log("Desk drawer count:", desk.drawerCount);
  
  console.log("Desk height before:", desk.dimensions.height);
  
  desk.adjustHeight(80);
  
  console.log("Desk height after:", desk.dimensions.height);
  
  // Test accessing nested object properties
  console.log("Desk material:", desk.material);
  console.log("Desk dimensions (width):", desk.dimensions.width);
  