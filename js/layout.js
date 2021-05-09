let acc = document.getElementsByClassName("accordion-header");
let i;
// console.log(acc);

const toggleAccordion = item => {
    const submenu = item.nextElementSibling;
    if (submenu.style.maxHeight) submenu.style.maxHeight = null;
    else submenu.style.maxHeight = submenu.scrollHeight + "px";
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        const header = this.classList;
        if (!header.contains("active")) {
            Array.from(acc).forEach(a => {
                if (a != this) {
                    let submenu = a.nextElementSibling;
                    submenu.style.maxHeight = null;
                } else {
                    toggleAccordion(this);
                }
            })
        }
    });
}

let dropdown = document.querySelectorAll(".dropdown-button");
Array.from(dropdown).forEach(d => {
    d.addEventListener('click', function () {
        const list = this.nextElementSibling;
        if (list.style.display == "none" || list.style.display == "") list.style.display =
            "block"
        else list.style.display = "none"
    })
})

const hamburger = document.querySelector('.menu-small > .hamburger');
const closeButton = document.querySelector('.menu-small > .close');
hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    closeButton.style.display = "block";
    document.querySelector('.menu-small .menu-small-container').classList.remove("hide");
})
closeButton.addEventListener('click', () => {
    hamburger.style.display = "block";
    closeButton.style.display = "none";
    document.querySelector('.menu-small .menu-small-container').classList.add("hide");
})