/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Helper function to create an element
function createElement(tag, textContent, className) {
    const element = document.createElement(tag);
    if (textContent) element.textContent = textContent;
    if (className) element.classList.add(className);
    return element;
}

// Main function to create an article element with data from an object
function createArticle(data) {
    const article = document.createElement('article');

    const title = createElement('h2', data.title, 'article-title');
    const content = createElement('p', data.content, 'article-content');
    const author = createElement('p', `By: ${data.author}`, 'article-author');

    article.appendChild(title);
    article.appendChild(content);
    article.appendChild(author);

    return article;
}

// Example usage
const articleData = {
    title: "JavaScript Functions",
    content: "Functions are one of the fundamental building blocks in JavaScript.",
    author: "John Doe"
};

const articleElement = createArticle(articleData);
document.body.appendChild(articleElement);
// console.log(articleElement);
