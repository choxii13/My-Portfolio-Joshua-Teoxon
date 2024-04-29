import { scrollNav, scrollToLink, toTrim } from "./scroll-util.js";
const header = document.querySelector("header");
const linkElements = document.querySelectorAll(".nav-items a");

window.addEventListener("scroll", () => {
  if (window.pageYOffset <= 42) {
    header.classList.remove("fixed-top");
  } else {
    header.classList.add("fixed-top");
  }
  forScrolling(window.pageYOffset);
});

function forScrolling(scrollValue) {
  for (let i = 0; i < linkElements.length; i++) {
    const id = scrollNav(scrollToLink(), scrollValue);
    const name = toTrim(linkElements[i]);
    const bottomBorder = linkElements[i].parentElement.classList;
    if (id === name) {
      bottomBorder.add("active");
    } else {
      bottomBorder.remove("active");
    }
  }
}
