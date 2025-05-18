document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
});