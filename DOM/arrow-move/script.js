// when arrow moves the box moves with it like when move to right the box moves to right and when move to left the box moves to left

// window.addEventListener('mousemove', (e) => {
//     gsap.to("#rect", {
//         left: e.clientX + "px",
//         top: e.clientY + "px",
//         ease: "power3"
//     });
// });

window.addEventListener('mousemove', (e) => {
    var rect = document.querySelector("#rect");
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        2 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (200 + rect.getBoundingClientRect().width / 2),
        e.clientX
    );
    gsap.to("#rect", {
        left: xval + "px",
        ease: "power3",
    });
});
