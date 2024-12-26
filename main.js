// Select the hamburger icon and the navigation menu
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

// Add a click event listener to the hamburger icon
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
