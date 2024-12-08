

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
    const imgScroll = document.querySelector(".imgscroll");
    const images = document.querySelectorAll(".imgscroll img");
    const totalImages = images.length;

    let currentIndex = 0; // Start with the first image
    let direction = 1; // 1 for forward, -1 for backward

    function scrollImages() {
        // Update index based on direction
        currentIndex += direction;

        // Reverse direction if at the beginning or end
        if (currentIndex >= totalImages - 1) {
            direction = -1; // Change to backward
        } else if (currentIndex <= 0) {
            direction = 1; // Change to forward
        }

        // Scroll to the current image
        const nextImage = images[currentIndex];
        const offset = nextImage.offsetLeft - imgScroll.offsetLeft;
        imgScroll.scrollTo({
            left: offset,
            behavior: 'smooth', // Smooth scrolling
        });
    }

    // Disable manual scrolling
    imgScroll.addEventListener("scroll", (e) => {
        e.preventDefault();
        imgScroll.scrollLeft = images[currentIndex].offsetLeft - imgScroll.offsetLeft;
    });

    // Start auto-scrolling every 2 seconds
    setInterval(scrollImages, 3000);
});
