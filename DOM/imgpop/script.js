// when mouse move to the div and the popup imges will show up and hide like flow of imges


document.querySelector('#center').addEventListener('mousemove', (e) => {
    console.log(e.clientX, e.clientY);
    gsap.to("#imgpop", {
        x: e.clientX,
        y: e.clientY,
        ease: "power3",
    });
}
);