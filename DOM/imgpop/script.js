// Throttle function to limit the rate at which a function can fire
function throttleFunction(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

document.querySelector('#center').addEventListener('mousemove', throttleFunction((e) => {
    // Create a new img element
    const img = document.createElement('img');
    img.src = 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    img.classList.add('image-flow');

    // Set the position of the image
    img.style.left = `${e.clientX}px`;
    img.style.top = `${e.clientY}px`;

    // Append the image to the body
    document.body.appendChild(img);

    // Animate the image using GSAP
    gsap.fromTo(img, {
        // opacity: 1,
        scale: 0,
    }, {
        duration: 0.5,
        ease: 'power1.inOut',
        scale: 1,
        // opacity: 0,
        onComplete: () => {
            // Remove the image after the animation completes
            img.remove();
        }
    });
}, 100));