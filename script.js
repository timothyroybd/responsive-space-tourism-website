const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navigation-bar");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  console.log(" I have been clicked");
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
}
