const inputs = document.querySelectorAll(".input");
const remember = document.querySelector('.remember input');


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


window.addEventListener('pageshow', function (event) {
    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
        if (input.value)
            input.parentNode.parentNode.classList.add('focus');
    });
});

if (remember) {
    remember.addEventListener('click', () => {
        const list = remember.parentNode.classList;
        list.contains('focus') ? list.remove('focus') : list.add('focus');
    })
}
