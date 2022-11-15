const burgerButton = document.getElementById("the-burger");
const navList = document.getElementById("nav-list");
const x = document.getElementById("x");

burgerButton.addEventListener("click", navPopup);
x.addEventListener("click", navClose);

function navPopup() {
    navList.style.display = "block";
    x.style.display = "block";
    burgerButton.style.display = "none";
}

function navClose() {
    navList.style.display = "none";
    x.style.display = "none";
    burgerButton.style.display = "block";
}