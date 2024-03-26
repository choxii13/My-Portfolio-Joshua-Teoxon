export function carouselFn(carouselItems, modalElement) {
  let currentIndex = 0;

  function showSlide(index) {
    carouselItems.forEach((item) => {
      item.style.display = "none";
    });

    carouselItems[index].style.display = "block";
  }

  function previousSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);

  document.getElementById("button-left").addEventListener("click", nextSlide);
  document
    .getElementById("button-right")
    .addEventListener("click", previousSlide);

  const closeModalElement = document.querySelector("#close-modal");

  closeModalElement.addEventListener("click", () => {
    modalElement.close();
  });
}
