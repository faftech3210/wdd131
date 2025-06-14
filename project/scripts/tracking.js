document.addEventListener("DOMContentLoaded", function () {
    const trackingForm = document.getElementById("tracking-form");
    const trackingResults = document.getElementById("tracking-results");
    const progressUpdates = document.getElementById("progress-updates");

    trackingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const shipmentID = document.getElementById("shipment-id").value;

        // Simulate tracking results
        trackingResults.innerHTML = `<p>🔍 Searching for Shipment ID: <strong>${shipmentID}</strong>...</p>`;

        setTimeout(() => {
            trackingResults.innerHTML += `<p>🚚 Shipment Status: <strong>In Transit</strong></p>`;
            progressUpdates.innerHTML = `<li>📦 Package picked up</li>
                                         <li>🚛 In Transit</li>
                                         <li>🏠 Out for Delivery</li>`;
        }, 2000);
    });

    // Handle Notifications Subscription
    const notificationsForm = document.getElementById("notifications-form");

    notificationsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        alert(`✅ Subscription successful! You will receive alerts at ${email} & ${phone}`);
    });
});
