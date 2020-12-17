const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", ()=>{
    if (menu.className === "hidden") {
        menu.className = menu.className.replace("hidden", "open");
        hamburger.classList.add("show-menu");
        noScrolling();
    } else {
        menu.className = menu.className.replace("open", "hidden");
        hamburger.classList.remove("show-menu");
        noScrolling();
    }
})

function noScrolling(){
    if (document.documentElement.clientWidth < 651){
        if (document.body.classList.contains("block")) {
            document.body.classList.add("block");
        } else {
            document.body.classList.remove("block");
        }
    }
}

//closing menu after clicking on the link
menu.addEventListener("click", e => {
    if (e.target.tagName === "A") {
        menu.className = menu.className.replace("open", "hidden");
        hamburger.classList.remove("show-menu");
        noScrolling();
    }
})