

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".lazy-image");

    images.forEach((img) => {
        const src = img.getAttribute("data-src");
        if (src) {
            img.src = src;
        }
    });
});


let dropdownVisible = false;

const dropdown = document.querySelector('.dropdown');
const overlay = document.querySelector('.overlay');

function toggleDropdown() {

    dropdownVisible = !dropdownVisible;

    if (dropdownVisible) {
        dropdown.classList.add('open');
        overlay.classList.add('visible');
    } else {
        dropdown.classList.remove('open');
        overlay.classList.remove('visible');
    }
}

document.querySelector('.dropdown nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        toggleDropdown();
    }
});

window.addEventListener("load", () => {

});


const modal = document.getElementById('videoModal');
const openBtn = document.getElementById('openVideo');
const closeBtn = document.getElementById('closeModal');
const videoFrame = document.getElementById('youtubeVideo');

// Replace this with your YouTube video URL
const videoURL = "https://www.youtube.com/embed/u2Qc9QYISyQ?controls=0";
// Open Modal
openBtn.addEventListener('click', () => {
    videoFrame.src = videoURL; // Set video source
    modal.style.display = 'block'; // Show modal
});


// Close Modal if clicked outside the content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        videoFrame.src = ''; // Stop video playback
    }
});


function updateImageSrc() {
    const isLargeScreen = window.innerWidth >= 1280; // Check screen size

    document.querySelectorAll('.socials img').forEach(img => {
        const defaultSrc = img.getAttribute('src'); // Default src
        const largeSrc = img.getAttribute('data-large-src'); // Large src

        // Switch src based on screen size
        img.src = isLargeScreen ? largeSrc : defaultSrc;
    });
}

// Run on load and resize
updateImageSrc();
window.addEventListener('resize', updateImageSrc);
window.addEventListener('load', updateImageSrc);

// const scrollContainer = document.querySelector('.imgscroll');
// const images = document.querySelectorAll('.imgscroll img');

// // Duplicate images for infinite scrolling
// images.forEach(img => {
//     const clone = img.cloneNode(true); // Clone each image
//     scrollContainer.appendChild(clone); // Append the clone
// });

// // Variables for smooth scrolling
// let scrollAmount = 0;
// const scrollSpeed = 4; // Pixels per frame (adjustable)

// // Function to continuously scroll
// function autoScroll() {
//     scrollAmount += scrollSpeed; // Increment scroll position
//     scrollContainer.scrollLeft = scrollAmount; // Update scroll position

//     // Seamless loop: Reset when halfway through duplicated images
//     if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//         scrollAmount = 0; // Reset scroll position invisibly
//         scrollContainer.scrollLeft = 0;
//     }

//     requestAnimationFrame(autoScroll); // Continue scrolling
// }

// // Start scrolling
// autoScroll();

// // **Block only horizontal manual scrolling (Improved)**
// scrollContainer.addEventListener('wheel', (e) => {
//     if (e.deltaX !== 0) { // Detect horizontal scroll attempts
//         e.preventDefault(); // Block horizontal scroll
//     }
// }, { passive: false }); // Passive false allows e.preventDefault()

// scrollContainer.addEventListener('touchmove', (e) => {
//     if (e.touches.length > 1 || e.changedTouches[0].clientX !== e.changedTouches[0].clientX) {
//         e.preventDefault(); // Block horizontal swipe gestures
//     }
// }, { passive: false });

const scrollContainer = document.querySelector('.imgscroll');
const images = document.querySelectorAll('.imgscroll img');

// Parameters
const numClones = 10; // Number of times to duplicate the images
const scrollSpeed = 3; // Pixels per frame (adjustable speed)

// 1. Duplicate images to simulate infinite scrolling
for (let i = 0; i < numClones; i++) {
    images.forEach(img => {
        const clone = img.cloneNode(true); // Clone each image
        scrollContainer.appendChild(clone); // Append the clone
    });
}

// 2. Continuous scrolling variables
let scrollPos = 0; // Track current scroll position

function autoScroll() {
    // Increment the scroll position
    scrollPos += scrollSpeed;

    // 4. Apply the scroll position
    scrollContainer.scrollLeft = scrollPos;

    // Continue scrolling
    requestAnimationFrame(autoScroll);
}

// 5. Start the infinite scroll
autoScroll();

// Block only horizontal scroll (wheel event)
scrollContainer.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { // Only block if horizontal scroll
        e.preventDefault(); // Block horizontal scroll
    }
}, { passive: false }); // Allow preventDefault()

// Block only horizontal swipe (touchmove event)
scrollContainer.addEventListener('touchmove', (e) => {
    const touch = e.touches[0]; // Get the first touch point

    // Detect horizontal swipe
    const touchStartX = touch.clientX;
    const touchStartY = touch.clientY;

    e.target.addEventListener('touchmove', (moveEvent) => {
        const moveTouch = moveEvent.touches[0];
        const dx = Math.abs(moveTouch.clientX - touchStartX); // Horizontal movement
        const dy = Math.abs(moveTouch.clientY - touchStartY); // Vertical movement

        if (dx > dy) { // Block horizontal movement only
            moveEvent.preventDefault();
        }
    }, { passive: false });
});

