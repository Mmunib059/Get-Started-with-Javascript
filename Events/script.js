const grid = document.querySelector('.grid');
const cells = document.querySelectorAll('.cell');

// Highlight grid on hover
grid.addEventListener('mouseenter', () => {
    grid.style.outline = '3px solid #4CAF50';
});

grid.addEventListener('mouseleave', () => {
    grid.style.outline = 'none';
});

// Highlight individual cells on hover
cells.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
        cell.style.outline = '2px solid #2196F3';
    });
    
    cell.addEventListener('mouseleave', () => {
        cell.style.outline = 'none';
    });
    
    // Change cell background color on click
    cell.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        cell.style.backgroundColor = randomColor;
    });
});

// Toggle dark/light mode with 't' key
let isDarkMode = false;
document.addEventListener('keydown', (e) => {
    if (e.key === 't') {
        isDarkMode = !isDarkMode;
        document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
        document.body.style.color = isDarkMode ? '#fff' : '#333';
    }
});