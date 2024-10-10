let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

let container = document.querySelector(".list");
let items = document.querySelectorAll(".list .item");

let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let numberDisplay = indicator.querySelector(".numbers");

let active = 0;
let lastPosition = items.length - 1;

prevButton.onclick = () => {
  items[active].classList.remove("active");
  active = active > 0 ? active - 1 : lastPosition;
  items[active].classList.add("active");
  updateIndicators();
};

nextButton.onclick = () => {
  items[active].classList.remove("active");
  active = active < lastPosition ? active + 1 : 0;
  items[active].classList.add("active");
  updateIndicators();
};

function updateIndicators() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === active);
  });
  numberDisplay.textContent = String(active + 1).padStart(2, "0");
}
