import { carouselElement } from "./carousel-html.js";

export const modalElement = document.querySelector(".modal");
const readMoreButtonElements = document.querySelectorAll(
  "#projects .project-grid button"
);

// open modal and start of the functions data
export function openModal(event) {
  modalElement.showModal();
  const button = event.target;
  carouselElement(button);
}

// for button of read more elements
for (const readMoreButtonElement of readMoreButtonElements) {
  readMoreButtonElement.addEventListener("click", openModal);
}
