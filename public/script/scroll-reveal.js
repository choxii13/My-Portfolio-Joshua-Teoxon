// for my scroll
const scrollReveal = {
  origin: "bottom",
  distance: "90px",
  delay: 300,
  duration: 2000,
  reset: false,
};
const myScrollId = [
  "#home",
  "#about-me",
  "#journey",
  "#projects",
  "#skills",
  "#project",
  "#contact-me",
];

export function scrollFn() {
  for (const id of myScrollId) {
    ScrollReveal().reveal(id, { ...scrollReveal });
    ScrollReveal().reveal(`${id} *`, { ...scrollReveal, delay: 500 });
  }
}
