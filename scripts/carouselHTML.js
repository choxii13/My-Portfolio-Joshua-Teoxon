import { carousel } from "../data/carousel.data.js";
import { carouselFn } from "./carouselFn.js";
import { modalElement } from "./open-modal.js";

export function carouselHTML(button) {
  const name = button.dataset.project;
  const myTitle = button.parentElement.querySelector("p");
  let imagecarousel = "";

  carousel[name].map((value, index) => {
    imagecarousel += `<a href="/project-image/${name}/${
      index + 1
    }.PNG" target="_blank">
        <img src="/project-image/${name}/${index + 1}.PNG">
        <p id="description"> ${value}</p>
        </a>`;
  });

  modalElement.innerHTML = `<p id="close-modal"> X </p>
<h2> ${myTitle.textContent} </h2>
<div class="carousel">
    <button id="button-left"> <  </button>
    ${imagecarousel}
    <button id="button-right">
        > </button>
</div>
`;
  const carouselItems = document.querySelectorAll(".carousel a");
  carouselFn(carouselItems, modalElement);
}
