window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal.classList.add("popup");
});

close.addEventListener("click", () => {
  modal.classList.remove("popup");
});
