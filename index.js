// Menu Toggle Hamburger

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUl = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

close.addEventListener("click", () => {
  navUl.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

// Modal Section VARIABLES

const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openPopup);
closeModal.addEventListener("click", closePopup);

// open popup
function openPopup(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// close popup
function closePopup() {
  modal.style.display = "none";
}

// Animation
AOS.init({
  duration: 1000,
});
