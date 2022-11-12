const burgerButton = document.getElementById("the-burger");
const navList = document.getElementById("nav-list")

burgerButton.addEventListener("click", navPopup);

function navPopup() {
    navList.style.display = "block"
}