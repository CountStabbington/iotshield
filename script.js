// Sample IoT devices data
const devices = [
    { name: "Smartwatch 1", type: "smartwatch", subscription: "free" },
    { name: "Refrigerador 1", type: "refrigerator", subscription: "premium" },
    { name: "Smart Thermostat 1", type: "smartthermostat", subscription: "free" },
    // Add more devices as needed
];

// Function to filter devices based on selected criteria
function filterDevices() {
    const deviceType = document.getElementById("deviceType").value;
    const subscription = document.getElementById("subscription").value;

    const filteredDevices = devices.filter(device => {
        if (subscription === "free") {
            return (deviceType === "all" || device.type === deviceType) && device.subscription === "free";
        } else if (subscription === "premium") {
            return (deviceType === "all" || device.type === deviceType) && device.subscription === "premium";
        }
    });

    displayDevices(filteredDevices);
}

// Function to display filtered devices
function displayDevices(filteredDevices) {
    const deviceListContainer = document.getElementById("deviceList");
    deviceListContainer.innerHTML = "";

    filteredDevices.forEach(device => {
        const deviceCard = document.createElement("div");
        deviceCard.classList.add("deviceCard");

        deviceCard.innerHTML = `
            <h2>${device.name}</h2>
            <p>Type: ${device.type}</p>
            <p>Subscription: ${device.subscription}</p>
        `;

        deviceListContainer.appendChild(deviceCard);
    });
}

// Display all devices initially
displayDevices(devices);
