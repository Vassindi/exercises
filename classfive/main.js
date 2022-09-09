const body = document.body;
const input = document.querySelector(".name-input");
const overlay = document.querySelector(".overlay")

input.addEventListener("focus", focusInput)
overlay.addEventListener("click", endFocus)

function focusInput() {
    body.classList.add("focus-form");

}
function endFocus() {
    if (body.classList.contains(focus-form))
    body.classList.remove("focus-form");

}

input.addEventListener("focusin", focusImput);
input.addEventListener("focusout", endFocus);

form.addEventListener("submit", createList);

function createList(e) {
    e.preventDefault();
const wasHere = input.value;
}

function createList(e) {
    const nameContainer = document.createElement("li");
    const newName = document.createElement 
}