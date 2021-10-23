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

const contactForm = document.querySelector(".contact-form");
let fullname = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    name: fullname.value,
    email: email.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      fullname.value = "";
      email.value = "";
      message.value = "";
    } else {
      alert("Something went wrong, please try again");
    }
  };
  xhr.send(JSON.stringify(formData));
});
