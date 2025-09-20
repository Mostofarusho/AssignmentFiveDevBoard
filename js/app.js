// Bg Color
const colors = ["#FF3811", "teal", "purple", "gold", "pink"];
let index = 0;

document.getElementById("themeBtn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--page-bg", colors[index]);
    index = (index + 1) % colors.length;
});
// Get today's date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date().toLocaleDateString('en-US', options);

// Insert into DOM
document.getElementById("today").textContent = today;