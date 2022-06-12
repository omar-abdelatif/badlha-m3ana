// SCROLL UP
const Scroll = document.getElementById('scroll')
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        Scroll.classList.add("fadeIn");
    } else {
        Scroll.classList.remove("fadeIn");
    }
});
// FIXED NAVBAR
const navbar = document.getElementById('navbar');
window.addEventListener("scroll", function () {
    if (window.scrollY > 120) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});