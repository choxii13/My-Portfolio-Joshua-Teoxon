// toggle aside for mobile button burger
const burgerElement = document.querySelector("#mobile-menu-btn");
const asideElement = document.querySelector("aside ul");
const liElements = document.querySelectorAll("aside ul li");

export function toggleAside() {
  asideElement.classList.toggle("open");
}
burgerElement.addEventListener("click", toggleAside);

for (const liElement of liElements) {
  liElement.addEventListener("click", toggleAside);
}
