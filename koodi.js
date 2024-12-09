

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".lazy-image");

    images.forEach((img) => {
        const src = img.getAttribute("data-src");
        if (src) {
            img.src = src;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const imgScroll = document.querySelector(".imgscroll");
    const images = imgScroll.querySelectorAll("img");
    const dotContainer = document.querySelector(".dot-container");

    // Create a dot for each image
    images.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active"); // Make the first dot active initially
        dot.dataset.index = index; // Attach the index to the dot for navigation
        dotContainer.appendChild(dot);
    });

    const dots = dotContainer.querySelectorAll(".dot");

    // Add event listeners for dots (optional: for navigation)
    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(dot.dataset.index, 10);
            imgScroll.scrollTo({
                left: index * imgScroll.scrollWidth / images.length,
                behavior: "smooth",
            });
            updateActiveDot(index);
        });
    });

    // Scroll event listener to update active dot
    imgScroll.addEventListener("scroll", () => {
        const scrollLeft = imgScroll.scrollLeft;
        const index = Math.round(scrollLeft / (imgScroll.scrollWidth / images.length));
        updateActiveDot(index);
    });

    // Function to update the active dot
    function updateActiveDot(activeIndex) {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === activeIndex);
        });
    }
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
