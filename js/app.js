function Smooth(from, to){
    from.addEventListener('click', ()=>{
        to.scrollIntoView({behavior: "smooth"});
    })
};

Smooth(document.querySelector('#to-contact'), document.querySelector('#contact'));
Smooth(document.querySelector('#to-team'), document.querySelector('#team'));
Smooth(document.querySelector('#to-about'), document.querySelector('#about'));
Smooth(document.querySelector('#to-top'), document.querySelector('#site-top'));

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

//up arrow showing up
const main = document.querySelector("main");
const upBtn = document.querySelector('#to-top')
window.addEventListener("scroll", showUpArrow);

function showUpArrow() {
  if (window.scrollY > (main.offsetHeight)) {
    upBtn.classList.remove("hidden");
  } else {
    upBtn.classList.add("hidden");
  }
}



// who we are section - extending pictures
const memberContainer = document.querySelectorAll('.team-member');

function toggleExtend(){
    this.classList.toggle('extended');
}
function toggleActive(e){
    if (e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active')
    };
}

memberContainer.forEach(member => member.addEventListener('click', toggleExtend));
memberContainer.forEach(member => member.addEventListener('transitionend', toggleActive));

//form - hiding label on typing
const form = document.querySelector('form');
// form.addEventListener('click', labelOut);
// form.addEventListener('keyup', formOn);

const inputs = document.querySelectorAll('.intext');
// inputs.forEach(input => input.addEventListener('mouseout', ifMouseOut));

form.addEventListener('keyup', hideLabello);

function hideLabello(e){
    // const key = e.key;
    if (e.key === "Backspace") {
        if (!e.target.value) {
            console.log('usuwam labelkę');
            e.target.previousElementSibling.classList.remove("label-off")}
    } else {
        console.log('dodaję labelkę');
        e.target.previousElementSibling.classList.add("label-off");
    }
}


function ifMouseOut(e){
    if (!e.target.value) {
        e.target.previousElementSibling.classList.remove("label-off");
    // } else {
        // console.log('było coś');
    }  
}

function labelOut(e){
    if (e.target.classList.contains("label")) {
        // console.log('akapulko zawijam labelkę');
        e.target.classList.add("label-off");
    }
}

function formOn(e){
    console.log(e.key);
    if ((e.target.value !== "") && (!e.target.previousElementSibling.classList.contains("label-off"))) {
        e.target.previousElementSibling.classList.add("label-off");
        // console.log(e.target.value);
    } else if (e.target.value === "") {
        e.target.previousElementSibling.classList.remove("label-off");
        // console.log(e.target.value, "pusto było");        
    }
}

