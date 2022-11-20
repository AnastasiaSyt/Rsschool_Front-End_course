const burgerIcon = document.getElementById("burger");
const backgroundBurger = document.getElementById("background_burger");
const closeBurger = document.getElementById("close");
const burgerMenu = document.getElementById("burger_menu");

(function () {
  burgerIcon.addEventListener("click", openMenu);
  backgroundBurger.addEventListener("click", closeMenu);
  closeBurger.addEventListener("click", closeMenu);

  function openMenu() {
    backgroundBurger.classList.add("active");
    burgerMenu.classList.add("active");
  }

  function closeMenu() {
    backgroundBurger.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
})();
