// toggle aside for mobile button burger
const burgerElement = document.querySelector("#mobile-menu-btn");
const asideElement = document.querySelector("aside ul");
const liElements = document.querySelectorAll("aside ul li");
function toggleAside() {
  asideElement.classList.toggle("open");
}
burgerElement.addEventListener("click", toggleAside);
for (const liElement of liElements) {
  liElement.addEventListener("click", toggleAside);
}

// carousel data, paragraphs
const carousel = {
  authentication: [
    "you need to sign up to have an account/access to the main page",
    "you need to log-in to go to the main page",
    "this is the main page, only authorized can access it",
    "you can't acces main admin page if you're not an admin",
    "this is the admin page",
  ],

  facebook: [
    "this is the main page",
    "this is the sign-up",
    "when you have an error in submitting signup, it will show this red border and paragraph",
    "same as the change password",
    "this is the main page of the facebook ",
    "creating post like facebook",
    "it has preview image when creating post",
    "logout, change-name, and change-profile button",
    "changing profile picture",
    "changed profile picture",
  ],

  fileupload: [
    "this is the main page",
    "creating new user",
    "it is the added user, you can edit and delete",
    "changing user picture and name",
    "changed user picture and name",
  ],
  json: [
    "this is the main page, you can go to list of blogs and creating blogs",
    "my list of blogs - if there is no blog, No data",
    "creating blogs",
    "my list of blogs with data",
    "you can view the site that is related to the blog",
  ],

  sqlejs: [
    "I made two programs with same design but different backend, the mongodb and sql",
    "creating post",
    "my all posts, you can delete, edit and view post ",
    "editing post",
    "my one post",
  ],

  todolist: [
    "In this program, I used json as a backend",
    "you can add list, edit and delete",
    "if there is no value, the modal will appear",
    "you can edit the name and save",
    "here is the edited name",
  ],
};

const modalElement = document.querySelector(".modal");
const readMoreButtonElements = document.querySelectorAll(
  "#projects .project-grid button"
);

// open modal and start of the functions data
function openModal(event) {
  modalElement.showModal();
  const button = event.target;
  carouselElement(button);
}

// for button of read more elements
for (const readMoreButtonElement of readMoreButtonElements) {
  readMoreButtonElement.addEventListener("click", openModal);
}

// all functionts for carousel, previous slide, next slide, and closing modal element
// need to run after loading of the html in the modal
function carouselFn(carouselImages) {
  const closeModalElement = document.querySelector("#close-modal");
  const buttonLeftElement = document.getElementById("button-left");
  const buttonRightElement = document.getElementById("button-right");

  //starting index for slide
  let currentIndex = 0;
  // fn for current slide
  function showSlide(index) {
    for (const carouselImage of carouselImages) {
      carouselImage.style.display = "none";
    }
    carouselImages[index].style.display = "block";
  }

  // prev slide
  function previousSlide() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showSlide(currentIndex);
  }

  // next slide
  function nextSlide() {
    currentIndex =
      (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showSlide(currentIndex);
  }

  // for current slide
  showSlide(currentIndex);

  buttonLeftElement.addEventListener("click", nextSlide);
  buttonRightElement.addEventListener("click", previousSlide);

  // closing  modal
  closeModalElement.addEventListener("click", () => {
    modalElement.close();
  });
}

// for chop chop element in one functions
function carouselElement(button) {
  const name = button.dataset.project;
  const myTitle = button.parentElement.querySelector("p");
  modalElement.innerHTML = myCarouselHTML(myCarouselData(name), myTitle);
  carouselFn(document.querySelectorAll(".carousel a"));
}

// all data for modal carousel
function myCarouselData(name) {
  let carouselData = "";
  carousel[name].map((value, index) => {
    carouselData += `<a href="./${name}/${index + 1}.PNG" target="_blank">
          <img src="./${name}/${index + 1}.PNG">
          <p id="description"> ${value}</p>
          </a>`;
  });
  return carouselData;
}

// my html for carousel
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

// for my form element
const formElement = document.querySelector("form");

function sendingEmail(event) {
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());
  event.target.action = `mailto:teoxonjoshua13@gmail.com?subject=${data.subject}&amp&body=Fullname:${data.firstname}${data.lastname}%0Dmessage:${data.body}`;
}

formElement.addEventListener("submit", sendingEmail);
