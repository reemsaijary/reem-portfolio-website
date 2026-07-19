/*
    Main JavaScript
    Purpose:
    - Controls website functionality and interactions.
    - Handles dynamic rendering, navigation behavior,
    animations, and other client-side logic.
*/

console.log("Portfolio website JavaScript connected successfully.");

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar-link");

if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
        const isOpen = navbarMenu.classList.toggle("is-open");

        navbarToggle.setAttribute("aria-expanded", String(isOpen));
        navbarToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navbarMenu.classList.remove("is-open");
            navbarToggle.setAttribute("aria-expanded", "false");
            navbarToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}

const siteHeader = document.querySelector(".site-header");

function updateHeaderOnScroll() {
    if (!siteHeader) return;

    siteHeader.classList.toggle("is-scrolled", window.scrollY > 20);
}

updateHeaderOnScroll();
window.addEventListener("scroll", updateHeaderOnScroll);