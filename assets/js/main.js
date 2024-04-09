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

// open / close footer links (accordion)
let accordion = document.querySelectorAll(".footer-links article");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("show");
  });
}

// this time
let timeContainer = document.querySelector(".copy p time"),
  thisYear = new Date().getFullYear();
if (thisYear > 2024) {
  timeContainer.innerHTML = `2024 - ${thisYear}`;
}
