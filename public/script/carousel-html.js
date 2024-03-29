import { carouselFn } from "./carousel-fn.js";
import { carouselData } from "../../data/carousel-data.js";
import { modalElement } from "./open-modal.js";

// for chop chop element in one functions
export function carouselElement(button) {
  const name = button.dataset.project;
  const myTitle = button.parentElement.querySelector("p");
  modalElement.innerHTML = myCarouselHTML(myCarouselData(name), myTitle);
  carouselFn(document.querySelectorAll(".carousel a"), modalElement);
}

// all data for modal carousel
function myCarouselData(name) {
  let carouselHTML = "";
  carouselData[name].map((value, index) => {
    carouselHTML += `<a href="./data/${name}/${index + 1}.PNG" target="_blank">
              <img src="./data/${name}/${index + 1}.PNG">
              <p id="description"> ${value}</p>
              </a>`;
  });
  return carouselHTML;
}

// my html for carousel
function myCarouselHTML(carouselHTML, myTitle) {
  return `<p id="close-modal"> X </p>
      <h2> ${myTitle.textContent} </h2>
      <div class="carousel">
          ${carouselHTML}
      </div>
      <button id="button-left">
      < </button>
          <button id="button-right">
              > </button>
      `;
}
