const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", ()=>{
    if (menu.className === "hidden") {
        menu.className = menu.className.replace("hidden", "open");
        hamburger.classList.add("show-menu");
    } else {
        menu.className = menu.className.replace("open", "hidden");
        hamburger.classList.remove("show-menu");
    }
})