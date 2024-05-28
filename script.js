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

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            // Lógica de inicio de sesión
            console.log(`Iniciando sesión con correo: ${email} y contraseña: ${password}`);
            alert('Inicio de sesión exitoso.');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target['confirm-password'].value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            // Lógica de registro
            console.log(`Registrando usuario: ${name} con correo: ${email}`);
            alert('Registro exitoso.');
        });
    }
});

// Display all devices initially
displayDevices(devices);
