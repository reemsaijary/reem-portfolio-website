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

/* 
   Certificate Modal
 */

const certificateModal = document.getElementById("certificate-modal");
const certificateModalImage = document.getElementById(
    "certificate-modal-image"
);
const certificateModalTitle = document.getElementById(
    "certificate-modal-title"
);

const certificateButtons = document.querySelectorAll(
    ".certificate-view-button"
);

const certificateCloseButtons = document.querySelectorAll(
    "[data-certificate-close]"
);

let lastFocusedElement = null;

function openCertificateModal(button) {
    const imagePath = button.dataset.certificateImage;
    const certificateTitle =
        button.dataset.certificateTitle || "Certificate";

    if (!certificateModal || !certificateModalImage) {
        return;
    }

    lastFocusedElement = button;

    certificateModalImage.src = imagePath;
    certificateModalImage.alt = certificateTitle;
    certificateModalTitle.textContent = certificateTitle;

    certificateModal.classList.add("is-open");
    certificateModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    const closeButton = certificateModal.querySelector(
        ".certificate-modal-close"
    );

    closeButton?.focus();
}

function closeCertificateModal() {
    if (!certificateModal || !certificateModalImage) {
        return;
    }

    certificateModal.classList.remove("is-open");
    certificateModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    certificateModalImage.src = "";
    certificateModalImage.alt = "";

    lastFocusedElement?.focus();
}

certificateButtons.forEach((button) => {
    button.addEventListener("click", () => {
        openCertificateModal(button);
    });
});

certificateCloseButtons.forEach((button) => {
    button.addEventListener("click", closeCertificateModal);
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        certificateModal?.classList.contains("is-open")
    ) {
        closeCertificateModal();
    }
});

/* 
   Dynamic Footer Year
 */

const currentYearElement = document.getElementById("current-year");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}