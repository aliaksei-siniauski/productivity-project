export { switchMenu, closeMenu };
/* Burger Menu */

const hamburger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__nav");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-list__item");
const overlay = document.querySelector("#overlay");

const switchMenu = () => {
  hamburger.classList.toggle("open-menu");
  headerNav.classList.toggle("open-menu");
  navList.classList.toggle("open-menu");
  overlay.classList.toggle("overlay");
};

hamburger.addEventListener("click", switchMenu);
overlay.addEventListener("click", switchMenu);

const closeMenu = () => {
  setTimeout(() => {
    hamburger.classList.remove("open-menu");
    headerNav.classList.remove("open-menu");
    navList.classList.remove("open-menu");
    overlay.classList.remove("overlay");
  }, 1000);
};

navItems.forEach((el) => el.addEventListener("click", closeMenu));
headerNav.addEventListener("click", closeMenu);
