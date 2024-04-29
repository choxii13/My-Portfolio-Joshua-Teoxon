import { works } from "../context/work.js";
import { modalContent } from "../context/modal.js";
import { lazyLoading } from "./context.js";

const openModal = document.querySelectorAll(".bi-eye");

const modalElement = document.querySelector("#modal");
const closeModal = document.querySelector("#close");

const nextElement = document.querySelector("#next");
const beforeElement = document.querySelector("#before");

let currentImg = 0;

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", () => {
    modalContent(works[i]);
    currentImg = 0;
    showImg(currentImg);
    modalElement.showModal();
  });
}

closeModal.addEventListener("click", () => {
  modalElement.close();
});

nextElement.addEventListener("click", () => {
  const modalImg = document.querySelectorAll(".modal-content img");
  lazyLoading(modalImg);
  currentImg = (currentImg + 1) % modalImg.length;
  showImg(currentImg, "toShowRight");
});

beforeElement.addEventListener("click", () => {
  const modalImg = document.querySelectorAll(".modal-content img");
  lazyLoading(modalImg);
  currentImg = (currentImg + modalImg.length - 1) % modalImg.length;
  showImg(currentImg, "toShowLeft");
});

function showImg(current, direction) {
  const modalImg = document.querySelectorAll(".modal-content img");
  lazyLoading(modalImg);
  const textLength = document.querySelector(".modal-content .img-length");
  textLength.textContent = `${currentImg + 1} of ${modalImg.length} `;

  for (let i = 0; i < modalImg.length; i++) {
    modalImg[i].style.display = "none";
  }

  if (!direction) {
    return (modalImg[
      current
    ].style = `display:block; animation: toShow .5s linear`);
  }
  modalImg[current].style = `display:block; animation: ${direction} .5s linear`;
}
