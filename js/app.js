function Smooth(from, to){
    from.addEventListener('click', ()=>{
        to.scrollIntoView({behavior: "smooth"});
        console.log(`${from} this one to ${to}`);
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

// who we are section - extending pictures
const memberContainer = document.querySelectorAll('.team-member');

function toggleExtend(){
    this.classList.toggle('extended');
}
function toggleActive(e){
    console.log(e);
    if (e.propertyName.includes('flex-grow')) {
        this.classList.toggle('open-active')
    };
}

memberContainer.forEach(member => member.addEventListener('click', toggleExtend));
memberContainer.forEach(member => member.addEventListener('transitionend', toggleActive));
