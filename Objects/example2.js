/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

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
  
    // Method to update the name
    updateName: function (newName) {
      this.name = newName;
    },
  
    // Method to update the volume
    updateVolume: function (newVolume) {
      this.volume = newVolume;
    },
  
    // Method to update the color
    updateColor: function (newColor) {
      this.color = newColor;
    },
  
    // Method to update the pocketNum
    updatePocketNum: function (newPocketNum) {
      this.pocketNum = newPocketNum;
    },
  
    // Method to update strap lengths
    updateStrapLength: function (newLeft, newRight) {
      this.strapLength.left = newLeft;
      this.strapLength.right = newRight;
    },
  
    // Method to toggle the lid
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
  };
  
  // Testing the methods
  console.log("Original backpack object:", backpack);
  
  // Update name
  backpack.updateName("Adventure Backpack");
  console.log("Updated name:", backpack.name);
  
  // Update volume
  backpack.updateVolume(40);
  console.log("Updated volume:", backpack.volume);
  
  // Update color
  backpack.updateColor("blue");
  console.log("Updated color:", backpack.color);
  
  // Update pocket number
  backpack.updatePocketNum(20);
  console.log("Updated pocketNum:", backpack.pocketNum);
  
  // Update strap lengths
  backpack.updateStrapLength(30, 35);
  console.log("Updated strap lengths:", backpack.strapLength);
  
  // Toggle the lid
  backpack.toggleLid(true);
  console.log("Updated lid status:", backpack.lidOpen);
  