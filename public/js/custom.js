// SCROLL UP
const Scroll = document.getElementById('scroll')
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        Scroll.classList.add("fadeIn");
    } else {
        Scroll.classList.remove("fadeIn");
    }
});