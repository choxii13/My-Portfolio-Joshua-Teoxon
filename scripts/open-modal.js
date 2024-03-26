import { carouselHTML } from "./carouselHTML.js";

export const modalElement = document.querySelector(".modal");
const readMoreButtonElements = document.querySelectorAll(
  "#projects .project-grid button"
);

console.log(readMoreButtonElements);

export function openModal(event) {
  modalElement.showModal();
  const button = event.target;
  carouselHTML(button);
}

for (const readMoreButtonElement of readMoreButtonElements) {
  readMoreButtonElement.addEventListener("click", openModal);
}
