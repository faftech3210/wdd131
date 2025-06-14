document.addEventListener("DOMContentLoaded", function () {
    // Retrieve stored form data
    document.getElementById("shipment-type").textContent = localStorage.getItem("shipmentType");
    document.getElementById("weight").textContent = localStorage.getItem("weight");
    document.getElementById("destination").textContent = localStorage.getItem("destination");

    // Clear localStorage after displaying data
    localStorage.removeItem("shipmentType");
    localStorage.removeItem("weight");
    localStorage.removeItem("destination");
});
