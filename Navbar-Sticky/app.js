let navBar = document.getElementById("navB");

window.onscroll = () => {
  this.scrollY > 100
    ? navBar.classList.add("sticky")
    : navBar.classList.remove("sticky");
};
