import { carouselElement } from "./carouselHTML.js";

export const modalElement = document.querySelector(".modal");
const readMoreButtonElements = document.querySelectorAll(
  "#projects .project-grid button"
);

export function openModal(event) {
  modalElement.showModal();
  const button = event.target;
  carouselElement(button);
}

for (const readMoreButtonElement of readMoreButtonElements) {
  readMoreButtonElement.addEventListener("click", openModal);
}
