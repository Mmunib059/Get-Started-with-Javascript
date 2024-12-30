// Select and log the title of the page
const siteTitle = document.querySelector(".site-title");
console.log("Site Title:", siteTitle.textContent);

// Change the description of the page
const siteDescription = document.querySelector(".site-description");
siteDescription.textContent = "Your one-stop shop for all things backpacks!";
console.log("Updated Description:", siteDescription.textContent);

// Select all backpacks
const backpacks = document.querySelectorAll(".backpack");
console.log("All Backpacks:", backpacks);

// Update the lid status of the first backpack
const firstBackpackLid = document.querySelector("#pack01 .backpack__lid span");
firstBackpackLid.textContent = "open";

// Toggle lid button functionality for each backpack
const toggleLidButtons = document.querySelectorAll(".lid-toggle");
toggleLidButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const lidStatus = backpacks[index].querySelector(".backpack__lid span");
    const currentStatus = lidStatus.textContent;
    lidStatus.textContent = currentStatus === "open" ? "closed" : "open";
    button.textContent = currentStatus === "open" ? "Open lid" : "Close lid";
    console.log(`Backpack ${index + 1} lid is now: ${lidStatus.textContent}`);
  });
});

// Update strap lengths based on input
const strapForms = document.querySelectorAll("form");
strapForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const side = form.closest(".backpack__strap").getAttribute("data-side");
    const inputValue = form.querySelector("input").value;
    const strapSpan = form.previousElementSibling;
    strapSpan.textContent = `${inputValue} inches`;
    console.log(`Updated ${side} strap to ${inputValue} inches`);
  });
});

// List all features of each backpack
backpacks.forEach((backpack) => {
  const name = backpack.querySelector(".backpack__name").textContent;
  const features = backpack.querySelectorAll(".backpack__features li");
  console.log(`Features of ${name}:`);
  features.forEach((feature) => {
    console.log(feature.textContent.trim());
  });
});
