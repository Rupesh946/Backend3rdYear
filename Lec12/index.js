const box = document.getElementById("colorBox");
const button = document.getElementById("changeColorBtn");

button.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor = randomColor;
});