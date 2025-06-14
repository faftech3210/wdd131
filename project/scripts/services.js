document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to all buttons
    const buttons = document.querySelectorAll(".cta");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert(`You clicked: ${button.textContent}`);
        });
    });

    // Toggle mobile menu function
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Close menu when a link is clicked (for mobile users)
    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show"); // Hide menu after selection
        });
    });
    
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = `Last Modification: ${document.lastModified}`;


    // Handle form submission
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get user input values
            const shipmentType = document.getElementById("shipment-type").value;
            const weight = document.getElementById("weight").value;
            const destination = document.getElementById("destination").value;

            // Save data to localStorage for retrieval in thankyou.html
            localStorage.setItem("shipmentType", shipmentType);
            localStorage.setItem("weight", weight);
            localStorage.setItem("destination", destination);

            // Redirect to thankyou.html
            window.location.href = "thankyou.html";
        });
    }
});
