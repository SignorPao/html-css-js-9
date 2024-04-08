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

// add navigation shadow when scroll down (only mobile)
let navBar = document.querySelector(".nav-bottom");
window.onscroll = function () {
  window.scrollY > 50
    ? navBar.classList.add("mobile-scroll")
    : navBar.classList.remove("mobile-scroll");
};

// open / close footer links
// let linksTitle = document.querySelectorAll(".footer-links-title"),
//   linksList = document.querySelectorAll(".footer-links-title ~ ul");

// linksTitle.addEventListener('click', function listHandler(){
//   linksList.classList.toggle('show')
// })
