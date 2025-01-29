// when mouse move to the div and the popup images will show up and hide like flow of images

// Throttle function to limit the rate at which a function can fire
function throttleFunction(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

document.querySelector('#center').addEventListener('mousemove', throttleFunction((e) => {
    // Create a new div and img element
    var div = document.createElement('divimg');
    var img = document.createElement('img');
    
    // Set the image source (replace 'path/to/image.jpg' with your image path)
    img.src = 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    
    // Append the img to the div
    div.appendChild(img);
    
    // Set the position of the div
    div.style.position = 'absolute';
    div.style.left = e.clientX + 'px';
    div.style.top = e.clientY + 'px';
    
    // Append the div to the body
    document.body.appendChild(div);
    
    // Animate the div using GSAP
    gsap.to(div, {
        duration: 0.5,
        ease: 'power1.inOut',
        // scale: 1.5,
        delay: 0.5
    });
    gsap.to(div, {
        duration: 0.5,
        ease: 'power1.inOut',
        // scale: 1,
        delay: 1
    });
}, 100));