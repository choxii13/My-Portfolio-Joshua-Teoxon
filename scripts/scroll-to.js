import { forLoopElements, scrollToLink, toTrim } from "./scroll-util.js";
const linkElements = document.querySelectorAll(".nav-items a");
const logoElement = document.querySelector("#logo");
const homeElement = document.querySelector("#home");
const contactButtonElement = document.querySelector("#contact-me");
const contactElement = document.querySelector("#contacts");

for (const linkElement of linkElements) {
  linkElement.addEventListener("click", () => {
    forLoopElements(linkElements);
    linkElement.parentElement.classList.add("active");
    scrollTo(event.target);
  });
}

function scrollTo(element) {
  const value = forLoopElements(scrollToLink(), toTrim(element)) - 30;
  if (value <= 72) {
    return window.scrollTo(0, 0);
  }

  if (!value) {
    if (element.offsetTop <= 72) {
      return window.scrollTo(0, 0);
    }
    return window.scrollTo(0, element.offsetTop - 30);
  }

  window.scrollTo(0, value);
}

logoElement.addEventListener("click", () => {
  scrollTo(homeElement);
});

contactButtonElement.addEventListener("click", () => {
  scrollTo(contactElement);
});
