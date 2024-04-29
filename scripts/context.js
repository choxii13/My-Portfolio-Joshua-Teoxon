import { skillHtml } from "./context/skill.js";
import { servicesHtml } from "./context/service-i-provide.js";
import { educationHtml } from "./context/educations.js";
import { experienceHtml } from "./context/experience.js";
import { worksHtml } from "./context/work.js";

const skillElement = document.querySelector(".skill-container");
skillElement.innerHTML = skillHtml;

const servicesElement = document.querySelector(".services-container");
servicesElement.innerHTML = servicesHtml;

const educationElement = document.querySelectorAll(".education-container")[0];
educationElement.innerHTML = educationHtml;

const experiecentElement = document.querySelectorAll(".education-container")[1];
experiecentElement.innerHTML = experienceHtml;

const worksElement = document.querySelector(".works-container");
worksElement.innerHTML = worksHtml;

const allImages = document.querySelectorAll("img");
const section = document.querySelectorAll("section");
lazyLoading(allImages);
lazyLoading(section);
export function lazyLoading(value) {
  for (let i = 0; i < value.length; i++) {
    value[i].style.loading = "lazy";
  }
}
