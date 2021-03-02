let navBar = document.getElementById("nav-l");
let navTog = document.getElementById("nav-t");
let nav = document.getElementById("nav");

navTog.addEventListener("click", function () {
  navBar.classList.toggle("active");
  nav.classList.toggle("active");
  navTog.classList.toggle("active");
});
