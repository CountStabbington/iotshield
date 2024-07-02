// Sample IoT devices data
const devices = [
    { name: "Reloj Inteligente", type: "smartwatch", subscription: "free", image: "images/reloj_inteligente.jpg", guideLink: "guide_smartwatch.html" },
    { name: "Refrigerador", type: "refrigerator", subscription: "premium", image: "images/refrigerador_inteligente.jpg", guideLink: "guide_refrigerator.html" },
    { name: "Termostato Inteligente", type: "smartthermostat", subscription: "free", image: "images/termostato_inteligente.jpg", guideLink: "guide_smart_thermostat.html" },
    { name: "Steren LED WI-FI RGB+W multicolor de 10 w", type: "focos", subscription: "free", image: "images/steren_led.jpg", guideLink: "guias/guia_steren_led.html" },
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
            <img src="${device.image}" alt="${device.name}" class="deviceImage">
            <h2>${device.name}</h2>
            <p>Type: ${device.type}</p>
            <p>Subscription: ${device.subscription}</p>
            <button onclick="window.location.href='${device.guideLink}'">Ver Guía</button>
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
