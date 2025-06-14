document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    function toggleMenu() {
        let navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("show");
    }
})
