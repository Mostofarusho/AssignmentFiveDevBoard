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
// Start My JS Code 
// totaltask
const totalTask = document.getElementById("total_task").innerText;
console.log(totalTask);
// taskAssigned
const taskAssigned = document.getElementById("task_assigned").innerText;
console.log(taskAssigned);
// AllBtnAdd
const all_btn = document.getElementsByClassName("add_btn");
// console.log(all_btn);
for (const btn of all_btn) {
    btn.addEventListener("click", (event) => {
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        console.log(name);
    })
}