export function scrollToLink() {
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const services = document.querySelector("#services");
  const education = document.querySelector("#education");
  const experience = document.querySelector("#experience");
  const works = document.querySelector("#works");
  return [home, about, services, education, experience, works];
}

export function scrollNav(value, windowScroll) {
  for (let i = 0; i < value.length; i++) {
    if (value[i].offsetTop + 500 >= windowScroll) {
      return value[i].id;
    }
  }
}

export function toTrim(value) {
  return value.textContent.trim().toLowerCase();
}

export function forLoopElements(value, name) {
  for (let i = 0; i < value.length; i++) {
    if (!name) {
      value[i].parentElement.classList.remove("active");
    }
    if (value[i].id === name) {
      return value[i].offsetTop;
    }
  }
}
