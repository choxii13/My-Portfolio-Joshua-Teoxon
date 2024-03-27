export function carouselFn(carouselImages, modalElement) {
  const closeModalElement = document.querySelector("#close-modal");
  const buttonLeftElement = document.getElementById("button-left");
  const buttonRightElement = document.getElementById("button-right");

  let currentIndex = 0;

  function showSlide(index) {
    for (const carouselImage of carouselImages) {
      carouselImage.style.display = "none";
    }

    carouselImages[index].style.display = "block";
  }

  function previousSlide() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex =
      (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);

  buttonLeftElement.addEventListener("click", nextSlide);
  buttonRightElement.addEventListener("click", previousSlide);

  closeModalElement.addEventListener("click", () => {
    modalElement.close();
  });
}
