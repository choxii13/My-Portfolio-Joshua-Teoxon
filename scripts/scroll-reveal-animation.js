// for my scroll
// about scroll

const aboutElement = document.querySelector("#about .profile");
const aboutElements = document.querySelector("#about .about");
const skills = document.querySelector("#about .about .skill-container");

scrollReveal(aboutElement, "left", 0);
scrollReveal(aboutElements.children, "right", 1);
scrollReveal(skills.children, "right", 0);

// service i provide scroll
const serviceElement = document.querySelector("#services");
const servicesContainer = document.querySelector(
  "#services .services-container"
);

scrollReveal(serviceElement.children, "top", 1);
scrollReveal(servicesContainer.children, "bottom", 0);

// education scroll
const educationElement = document.querySelector("#education");
const educationContainer = document.querySelector(
  "#education .education-container"
);
const educationMiddleLine = document.querySelector(".straight-line");
scrollReveal(educationMiddleLine, "left", 0);
scrollReveal(educationElement.children, "top", 1);
scrollReveal(educationContainer.children, "right", 0);

// experience scroll
const experienceElement = document.querySelector("#experience");
const experienceContainer = document.querySelector(
  "#experience .education-container"
);
const experienceMiddleLine = document.querySelector(".straight-line");
scrollReveal(experienceMiddleLine, "right", 0);
scrollReveal(experienceElement.children, "top", 1);
scrollReveal(experienceContainer.children, "left", 0);

// works scroll
const worksElement = document.querySelector("#works");
const worksContainer = document.querySelector("#works .works-container");

scrollReveal(worksElement.children, "right", 1, 0);
scrollReveal(worksContainer.children, "bottom", 0, 0);

// contacts scroll

const contactElement = document.querySelector("#contacts");
const contactContainer = document.querySelector(
  "#contacts .contacts-container"
);

const formElement = document.querySelector("#contacts .form-and-map .form");
const mapElement = document.querySelector("#contacts .form-and-map .map");
const error = document.querySelector(".form p");
scrollReveal(contactElement.children, "right", 2, 0);
scrollReveal(contactContainer.children, "right", 0);
scrollReveal(mapElement, "right", 0);
scrollReveal(formElement.children, "left", 2);
scrollReveal(formElement.children[4], "left", 0);

function scrollReveal(element, origin, value) {
  const scroll = {
    distance: "100px",
    delay: 0,
    duration: 3000,
    origin: origin,
    reset: false,
  };
  if (!element.length) {
    ScrollReveal().reveal(element, { ...scroll });
  }
  for (let i = 0; i < element.length - value; i++) {
    ScrollReveal().reveal(element[i], {
      ...scroll,
      delay: (scroll.delay += 100),
    });
  }
}
