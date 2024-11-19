let dropdownVisible = false;

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const overlay = document.querySelector('.overlay');

    dropdownVisible = !dropdownVisible;

    if (dropdownVisible) {
        dropdown.classList.add('open');
        overlay.classList.add('visible');
    } else {
        dropdown.classList.remove('open');
        overlay.classList.remove('visible');
    }
}

function closeDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const overlay = document.querySelector('.overlay');

    dropdownVisible = false;
    dropdown.classList.remove('open');
    overlay.classList.remove('visible');
}

document.querySelector('.dropdown nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        closeDropdown();
    }
});
