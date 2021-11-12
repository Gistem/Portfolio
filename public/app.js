//Menu
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

//Work pop ups
//Plantear solo una clase y variar la Id, entonces a la hora de seleccionar con que modal trabajar usamos el Id que se va a abrir
///////////
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal.classList.add("popup");
});

close.addEventListener("click", () => {
  modal.classList.remove("popup");
});
//////////////
const open2 = document.getElementById("open2");
const modal2 = document.getElementById("modal2");
const close2 = document.getElementById("close2");

open2.addEventListener("click", () => {
  modal2.classList.add("popup2");
});

close2.addEventListener("click", () => {
  modal2.classList.remove("popup2");
});

///////////////
const open3 = document.getElementById("open3");
const modal3 = document.getElementById("modal3");
const close3 = document.getElementById("close3");

open3.addEventListener("click", () => {
  modal3.classList.add("popup3");
});

close3.addEventListener("click", () => {
  modal3.classList.remove("popup3");
});
//Form
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
