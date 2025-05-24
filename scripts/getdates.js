document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
});
const hbElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menulinks');

hbElement.addEventListener('click', () => {
    navElement.classList.toggle('open')
})

