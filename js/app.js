const colors = ["#FF3811", "teal", "purple", "gold", "pink"];
let index = 0;

document.getElementById("themeBtn").addEventListener("click", () => {
    document.documentElement.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});