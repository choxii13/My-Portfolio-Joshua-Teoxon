// for my scroll
// about scroll

const aboutElement = document.querySelector("#about .profile");
const aboutElements = document.querySelector("#about .about");
const skills = document.querySelector("#about .about .skill-container");

scrollReveal(aboutElement, "left", 0, 0);
scrollReveal(aboutElements.children, "right", 1, 0);
scrollReveal(skills.children, "right", 0, 200);

// service i provide scroll
const serviceElement = document.querySelector("#services");
const servicesContainer = document.querySelector(
  "#services .services-container"
);

scrollReveal(serviceElement.children, "top", 1, 0);
scrollReveal(servicesContainer.children, "bottom", 0, 0);

// education scroll
const educationElement = document.querySelector("#education");
const educationContainer = document.querySelector(
  "#education .education-container"
);
const educationMiddleLine = document.querySelector(".straight-line");
scrollReveal(educationMiddleLine, "left", 0, 600);
scrollReveal(educationElement.children, "top", 1, 0);
scrollReveal(educationContainer.children, "right", 0, 200);

// experience scroll
const experienceElement = document.querySelector("#experience");
const experienceContainer = document.querySelector(
  "#experience .education-container"
);
const experienceMiddleLine = document.querySelector(".straight-line");
scrollReveal(experienceMiddleLine, "right", 0, 600);
scrollReveal(experienceElement.children, "top", 1, 0);
scrollReveal(experienceContainer.children, "left", 0, 200);

// works scroll
const worksElement = document.querySelector("#works");
const worksContainer = document.querySelector("#works .works-container");

scrollReveal(worksElement.children, "right", 1, 0);
scrollReveal(worksContainer.children, "bottom", 0, 300);

// contacts scroll

const contactElement = document.querySelector("#contacts");
const contactContainer = document.querySelector(
  "#contacts .contacts-container"
);

const formElement = document.querySelector("#contacts .form-and-map .form");
const mapElement = document.querySelector("#contacts .form-and-map .map");
scrollReveal(contactElement.children, "right", 2, 0);
scrollReveal(contactContainer.children, "right", 0, 100);
scrollReveal(formElement.children, "left", 0, 100);
scrollReveal(mapElement, "right", 0, 100);

function scrollReveal(element, origin, value, delay) {
  const scroll = {
    distance: "300px",
    delay: delay,
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
      delay: (scroll.delay += 200),
    });
  }
}
