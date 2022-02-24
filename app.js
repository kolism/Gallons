const cards = document.querySelectorAll(".flex-card");
const swapBtn = document.querySelector(".floating-btn");
const container = document.querySelector(".flex-container");

function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
function swapLayout() {
  console.log("swapping layout");
  container.classList.toggle("swap");
}

cards.forEach((card) => card.addEventListener("click", toggleOpen));
cards.forEach((card) => card.addEventListener("transitionend", toggleActive));
swapBtn.addEventListener("click", swapLayout);
