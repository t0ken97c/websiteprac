let navLinks = document.getElementById("n-b");
let navBarToggle = document.getElementById("n-t");

navBarToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  navBarToggle.classList.toggle("active");
});
