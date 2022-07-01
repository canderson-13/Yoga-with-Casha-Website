// Select DOM elements
const imageContainer = document.getElementById('image-container');
const images = document.querySelectorAll('img');
 
// Create a index counter
let index = 0;
 
// Set the function runCarousel to be called
// every 4 seconds
let interval = setInterval(runCarousel, 4000);
 
function runCarousel() {
    index++ // increase index by 1
    checkOutBoundConditions() // check if out of bounds
    changeImage() // change image to new index value
}
 
function checkOutBoundConditions() {
    // If index reaches the end, set
    // index to 0 again (recall index
    // starts from 0)
    if(index === images.length) {
        index = 0
    }
    // If index is less than 0, set
    // to 0
    else if (index < 0) {
        index = 0
    }
}
 
function changeImage() {
    // Negative value on translateX shifts images left,
    // so show animates by multiplying the width of an 
    // image by index value
    imageContainer.style.transform = `translateX(${-index * 600}px)`
}

