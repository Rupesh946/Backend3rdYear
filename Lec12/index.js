const box = document.getElementById("colorBox");
const button = document.getElementById("toggleBtn");

// Array of 10 predefined colors
const colors = [
    "#FF6B6B", // Red
    "#4ECDC4", // Turquoise
    "#45B7D1", // Blue
    "#96CEB4", // Green
    "#FFEAA7", // Yellow
    "#DDA0DD", // Plum
    "#98D8C8", // Mint
    "#F7DC6F", // Light Yellow
    "#BB8FCE", // Light Purple
    "#85C1E9"  // Light Blue
];

let intervalId = null;
let isRunning = false;

function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    box.style.backgroundColor = randomColor;
}

button.addEventListener("click", () => {
    if (!isRunning) {
        // Start the color changing
        intervalId = setInterval(changeColor, 500); // Change every 2 seconds
        button.textContent = "Stop";
        button.style.backgroundColor = "red";
        isRunning = true;
    } else {
        // Stop the color changing
        clearInterval(intervalId);
        intervalId = null;
        button.textContent = "Start";
        button.style.backgroundColor = "blue";
        isRunning = false;
    }
});