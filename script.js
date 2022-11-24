const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".burger-overlay");

const openBurgerMenu = function () {
  burgerMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
  burgerMenu.classList.add("animation");
  document.getElementById("top").scrollIntoView();
};

const CloseBurgerMenu = function () {
  burgerMenu.classList.add("hidden");
  overlay.classList.add("hidden");
};

openBtn.addEventListener("click", openBurgerMenu);
closeBtn.addEventListener("click", CloseBurgerMenu);
overlay.addEventListener("click", CloseBurgerMenu);
