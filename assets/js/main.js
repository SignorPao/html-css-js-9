// show / close mobile menu
let menuBtn = document.querySelector(".menu"),
  menuList = document.querySelector(".nav-bottom-menu"),
  menuBtnIcon = menuBtn.querySelector("img");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("open");
  let isOpen = menuList.classList.contains("open");
  menuBtnIcon.setAttribute(
    "src",
    isOpen ? "/assets/img/close.svg" : "/assets/img/menu.svg"
  );
});
