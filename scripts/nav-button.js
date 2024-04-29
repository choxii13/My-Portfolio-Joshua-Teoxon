const navBurgerElement = document.querySelector(".nav-burger-button");

function burgerBtn() {
  const spanElement = navBurgerElement.querySelectorAll("span");
  const asideElement = document.querySelector("aside");

  for (let i = 0; i < spanElement.length; i++) {
    spanElement[i].classList.toggle("x");
  }
  asideElement.classList.toggle("show");
}

navBurgerElement.addEventListener("click", burgerBtn);
