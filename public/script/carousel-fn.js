// all functionts for carousel, previous slide, next slide, and closing modal element
// need to run after loading of the html in the modal
export function carouselFn(carouselImages, modalElement) {
  const closeModalElement = document.querySelector("#close-modal");
  const buttonLeftElement = document.getElementById("button-left");
  const buttonRightElement = document.getElementById("button-right");

  //starting index for slide
  let currentIndex = 0;
  // fn for current slide
  function showSlide(index) {
    for (const carouselImage of carouselImages) {
      carouselImage.style.display = "none";

      if (currentIndex != 0) {
        carouselImage.style.animation = "zoomIn 0.6s linear";
      }
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
