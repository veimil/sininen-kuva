

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".lazy-image");

    images.forEach((img) => {
        const src = img.getAttribute("data-src");
        if (src) {
            img.src = src;
        }
    });
});


const scrollContainer = document.querySelector('.imgscroll');
const images = document.querySelectorAll('.imgscroll img');

const numClones = 10;
const scrollSpeed = 3;

// Duplicate images to simulate infinite scrolling
for (let i = 0; i < numClones; i++) {
    images.forEach(img => {
        const clone = img.cloneNode(true);
        scrollContainer.appendChild(clone);
    });
}



let scrollPos = 0;

function autoScroll() {
    scrollPos += scrollSpeed;

    scrollContainer.scrollLeft = scrollPos;

    requestAnimationFrame(autoScroll);
}

autoScroll();


const targets = document.querySelectorAll('.pop, .raise');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        root: null,
        threshold: 1, // Threshold for .pop elements
    }
);

targets.forEach((target) => observer.observe(target));


//for fade elements
const fadeTargets = document.querySelectorAll('.fade');

const fadeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        root: null,
        threshold: 0.5, // Threshold for .pop elements
    }
);

fadeTargets.forEach((target) => fadeObserver.observe(target));



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

// window.addEventListener("load", () => {

// });


const modal = document.getElementById('videoModal');
const openBtn = document.getElementById('openVideo');
const closeBtn = document.getElementById('closeModal');
const videoFrame = document.getElementById('youtubeVideo');

// Replace this with your YouTube video URL
const videoURL = "https://www.youtube.com/embed/u2Qc9QYISyQ?controls=1";
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
    const isLargeScreen = window.innerWidth > 1280; // Check if larger than 1280px

    document.querySelectorAll('.socials img').forEach(img => {
        const defaultSrc = img.getAttribute('src'); // Default src
        const largeSrc = img.getAttribute('data-large-src'); // Large src
        const smallSrc = img.getAttribute('data-small-src'); // Small src

        // Switch src based on screen size
        if (isLargeScreen) {
            img.src = largeSrc || defaultSrc; // Use largeSrc or fallback to default
        } else {
            img.src = smallSrc || defaultSrc; // Use smallSrc or fallback to default
        }
    });
}


updateImageSrc();
window.addEventListener('resize', updateImageSrc);
window.addEventListener('load', updateImageSrc);



// const galleryPreviewSection = document.querySelector("#gallerypreview");
// const galleryImg = document.querySelector("#gallerypreview-img");

// const sectionOffset = galleryPreviewSection.offsetTop;

// const galleryHeight = window.innerHeight;

// const gallerypreviewimages = [
//     "/images/galleryimg1.webp",
//     "/images/galleryimg4.webp",
//     "/images/galleryimg2.webp",
//     "/images/galleryimg3.webp",
// ];

// // Preload all images
// const preloadImages = () => {
//     gallerypreviewimages.forEach((src) => {
//         const img = new Image();
//         img.src = src;
//     });
// };

// preloadImages();


// window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;

//     gallerypreviewimages.forEach((src, index) => {
//         const start = sectionOffset + galleryHeight * index;
//         const end = sectionOffset + galleryHeight * (index + 1);

//         if (scrollY >= start && scrollY < end) {
//             if (galleryImg.src !== src) {
//                 galleryImg.src = src;
//             }
//         }
        
//     });
// });

