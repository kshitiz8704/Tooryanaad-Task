const checkbtn = document.querySelector(".checkbtn");
const list = document.querySelector(".list");
const hero = document.querySelector(".hero");
const skills = document.querySelector(".skills");
const workProcess = document.querySelector(".work-process");
const newsletter = document.querySelector(".newsletter");
const about = document.querySelector(".aboutbtn");
const home = document.querySelector(".home");
const home1 = document.querySelector(".home1");
const about1 = document.querySelector(".aboutbtn1");
const home2 = document.querySelector(".home2");
const about2 = document.querySelector(".aboutbtn2");



let clickCount = 0;
checkbtn.addEventListener("click", (event) => {
    clickCount++;

    if (clickCount === 1) {
        list.classList.add('display');
    } else if (clickCount === 2) {
        list.classList.remove('display');
        clickCount = 0;
    }
});

about.addEventListener("click", (event) => {
    hero.classList.add('hidden');
    skills.classList.add('hidden');
    workProcess.classList.add('hidden');
    newsletter.classList.add('hidden');
});

about1.addEventListener("click", (event) => {
    hero.classList.add('hidden');
    skills.classList.add('hidden');
    workProcess.classList.add('hidden');
    newsletter.classList.add('hidden');
});

about2.addEventListener("click", (event) => {
    hero.classList.add('hidden');
    skills.classList.add('hidden');
    workProcess.classList.add('hidden');
    newsletter.classList.add('hidden');
});

home.addEventListener("click", (event) => {
    hero.classList.remove('hidden');
    skills.classList.remove('hidden');
    workProcess.classList.remove('hidden');
    newsletter.classList.remove('hidden');
});

home1.addEventListener("click", (event) => {
    hero.classList.remove('hidden');
    skills.classList.remove('hidden');
    workProcess.classList.remove('hidden');
    newsletter.classList.remove('hidden');
});

home2.addEventListener("click", (event) => {
    hero.classList.remove('hidden');
    skills.classList.remove('hidden');
    workProcess.classList.remove('hidden');
    newsletter.classList.remove('hidden');
});
