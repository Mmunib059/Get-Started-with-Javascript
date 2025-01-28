// make a rectangle and when we move mouse on that rectangle on the left side we want to gradually change the color of the rectangle! to red and when we move mouse to the right side we want to change the color to blue.

// when we move mouse to left side make the rectangle slow down the more mouse reaches to the left and do the same when mouse goes to the right side

let rect = document.querySelector('#center');

rect.addEventListener('mousemove', (e) => {
    var rectangleLocation = rect.getBoundingClientRect();
    var mouseX = e.clientX - rectangleLocation.left;

    if (mouseX < rectangleLocation.width / 2) {
        let redValue = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, mouseX);
        rect.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    } else {
        let blueValue = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, mouseX);
        rect.style.backgroundColor = `rgb(0, 0, ${blueValue})`;
    }
});

rect.addEventListener('mouseleave', () => {
    gsap.to(rect, {
        duration: 1,
        backgroundColor: " #4caf50",
        
    });
});

 // let mouseX = e.clientX - rectLeft;
    // let percentage = (mouseX / rectWidth) * 100;

    // if (mouseX < rectCenterX) {
    //     // Change to red
    //     let redValue = Math.floor((1 - (mouseX / rectCenterX)) * 255);
    //     rect.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
    // } else {
    //     // Change to blue
    //     let blueValue = Math.floor(((mouseX - rectCenterX) / rectCenterX) * 255);
    //     rect.style.backgroundColor = `rgb(0, 0, ${blueValue})`;
    // }