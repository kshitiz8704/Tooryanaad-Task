const checkbtn = document.querySelector(".checkbtn");
const list = document.querySelector(".list");



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