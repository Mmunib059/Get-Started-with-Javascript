/* 

   Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */
// Helper function: Creates and returns a <figure> element
function createFigure() {
    const figure = document.createElement("figure"); // Create <figure>
    const img = document.createElement("img"); // Create <img>
    img.src = frogpack.image; // Set image source
    img.alt = frogpack.name; // Set alt text
    
    const figcaption = document.createElement("figcaption"); // Create <figcaption>
    figcaption.textContent = frogpack.name; // Set figcaption text
    
    figure.appendChild(img); // Add <img> to <figure>
    figure.appendChild(figcaption); // Add <figcaption> to <figure>
    
    return figure; // Return the completed <figure>
  }
  
  // Main function: Creates and returns an <article> element
  function createArticle() {
    const article = document.createElement("article"); // Create <article>
    article.classList.add("backpack"); // Add class to <article>
    
    article.innerHTML = content; // Add the HTML content
    
    const figure = createFigure(); // Call helper function to create <figure>
    article.appendChild(figure); // Add <figure> to <article>
    
    return article; // Return the completed <article>
  }
  
  // Append the created <article> to the document
  const main = document.querySelector("main"); // Select main container
  const newArticle = createArticle(); // Call main function
  main.appendChild(newArticle); // Append <article> to the <main> element
  