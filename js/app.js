//loader
const loader = document.querySelector(".loader-wrapper");
window.addEventListener("beforeunload", () => {
  loader.style.display = "flex";
});

window.addEventListener("load", () => {
  loader.style.display = "none";
});

//dark mode starting
const body = document.querySelector("body");
const darkBtn = document.querySelector(".dark-mode-container");
const bulb = document.querySelector(".toggle-mode");
darkBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  bulb.classList.toggle("clicked");
  if (darkBtn.lastElementChild.innerHTML === "dark mode") {
    darkBtn.lastElementChild.innerHTML = "light mode";
  } else {
    darkBtn.lastElementChild.innerHTML = "dark mode";
  }
});

//hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.className = menu.className.replace("hidden", "open");
    hamburger.classList.add("show-menu");
    noScrolling();
  } else {
    menu.className = menu.className.replace("open", "hidden");
    hamburger.classList.remove("show-menu");
    noScrolling();
  }
});
function noScrolling() {
  if (document.documentElement.clientWidth < 651) {
    if (document.body.classList.contains("block")) {
      document.body.classList.add("block");
    } else {
      document.body.classList.remove("block");
    }
  }
}

//closing menu after clicking on the link
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.className = menu.className.replace("open", "hidden");
    hamburger.classList.remove("show-menu");
    noScrolling();
  }
});

//up arrow showing up
const main = document.querySelector("main");
const upBtn = document.querySelector("#to-top");
window.addEventListener("scroll", showUpArrow);
function showUpArrow() {
  if (window.scrollY > main.offsetHeight) {
    upBtn.classList.remove("hidden");
  } else {
    upBtn.classList.add("hidden");
  }
}

// who we are section - extending pictures
const memberContainer = document.querySelectorAll(".team-member");
function toggleExtend() {
  this.classList.toggle("extended");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex-grow")) {
    this.classList.toggle("open-active");
  }
}
memberContainer.forEach((member) =>
  member.addEventListener("click", toggleExtend)
);
memberContainer.forEach((member) =>
  member.addEventListener("transitionend", toggleActive)
);

//form - hiding label on typing
const form = document.querySelector("form");
form.addEventListener("keyup", labelOut);
function labelOut(e) {
  if (!e.target.value) {
    e.target.previousElementSibling.classList.remove("label-off");
  } else {
    e.target.previousElementSibling.classList.add("label-off");
  }
}
