let sidebarBtn = document.querySelector(".toggle-sidebar-btn");
let sidebar = document.getElementById("sidebar");

sidebarBtn.addEventListener("click", () => {
    document.body.classList.toggle("toggle-sidebar");
});
