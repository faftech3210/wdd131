document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("p").forEach((para) => {
        const words = para.innerHTML.split(" ");
        if (words.length > 1) {
            para.innerHTML = `<span class="first-word">${words[0]}</span> ${words.slice(1).join(" ")}`;
        }
    });
});

// Display Current Year & Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation Function
function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) ? 
        (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) : 
        "N/A";
}

// Get Static Temperature & Wind Speed from HTML
const temp = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

// Display Calculated Wind Chill
document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
