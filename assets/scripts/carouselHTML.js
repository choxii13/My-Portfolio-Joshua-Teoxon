import { carousel } from "../data/carousel.data.js";
import { carouselFn } from "./carouselFn.js";
import { modalElement } from "./open-modal.js";

export function carouselElement(button) {
  const name = button.dataset.project;
  const myTitle = button.parentElement.querySelector("p");
  modalElement.innerHTML = myCarouselHTML(myCarouselData(name), myTitle);
  carouselFn(document.querySelectorAll(".carousel a"), modalElement);
}

function myCarouselData(name) {
  let carouselData = "";
  carousel[name].map((value, index) => {
    carouselData += `<a href="/project-image/${name}/${
      index + 1
    }.PNG" target="_blank">
        <img src="/assets/project-image/${name}/${index + 1}.PNG">
        <p id="description"> ${value}</p>
        </a>`;
  });
  return carouselData;
}

function myCarouselHTML(carouselData, myTitle) {
  return `<p id="close-modal"> X </p>
<h2> ${myTitle.textContent} </h2>
<div class="carousel">
    <button id="button-left"> <  </button>
    ${carouselData}
    <button id="button-right">
        > </button>
</div>
`;
}
