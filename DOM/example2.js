/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// Add a class to the site header
const siteHeader = document.querySelector(".siteheader");
siteHeader.classList.add("highlight");
console.log("Added 'highlight' class to site header:", siteHeader.className);

// Change the inline style of the main content
const mainContent = document.querySelector(".maincontent");
mainContent.style.backgroundColor = "#f9f9f9";
mainContent.style.padding = "20px";
console.log("Modified main content styles:", mainContent.style.cssText);

// Modify attributes of the first backpack image
const firstBackpackImage = document.querySelector("#pack01 .backpack__image img");
firstBackpackImage.setAttribute("alt", "Everyday Backpack Image");
console.log("Updated alt attribute of the first backpack image:", firstBackpackImage.alt);

// Add a custom data attribute to the second backpack
const secondBackpack = document.querySelector("#pack02");
secondBackpack.setAttribute("data-featured", "true");
console.log("Added custom data attribute to second backpack:", secondBackpack.dataset.featured);

// Toggle a class on the button of the first backpack
const firstBackpackButton = document.querySelector("#pack01 .lid-toggle");
firstBackpackButton.addEventListener("click", () => {
  firstBackpackButton.classList.toggle("active");
  console.log(
    "Toggled 'active' class on the button:",
    firstBackpackButton.className
  );
});

// Remove a class from the site footer
const siteFooter = document.querySelector(".sitefooter");
siteFooter.classList.remove("highlight");
console.log("Removed 'highlight' class from site footer:", siteFooter.className);

// Update the text and style of a lid status
const lidStatus = document.querySelector("#pack02 .backpack__lid span");
lidStatus.textContent = "open";
lidStatus.style.color = "green";
console.log("Updated lid status and style:", lidStatus.textContent, lidStatus.style.color);
