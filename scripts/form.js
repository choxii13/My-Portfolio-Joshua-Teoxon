// for my form element // sending email
const emailElement = document.querySelector("#email");
const nameElement = document.querySelector("#name");
const messageElement = document.querySelector("#message");
const mailElement = document.querySelector("#mailto");
const formError = document.querySelector(".form p");
const elements = [nameElement, emailElement, messageElement];

function sendingEmail(event) {
  if (isValid(elements).length > 0) {
    return (formError.style.display = "block");
  }
  if (emailIsValid(emailElement)) {
    return (formError.style.display = "block");
  }

  formError.style.display = "none";
  event.srcElement.href = `mailto:teoxonjoshua13@gmail.com?subject=${nameElement.value} ${emailElement.value}&body=${messageElement.value}`;
  removeValue(elements);
}

mailElement.addEventListener("click", sendingEmail);

function isValid(element) {
  const isTrue = [];
  for (let i = 0; i < element.length; i++) {
    if (element[i].value.trim() === "" && !element[i].value) {
      element[i].style = "box-shadow: 0 3px 8px rgba(224, 0, 0, 0.7);";
      isTrue.push(element[i]);
    } else {
      element[i].style = "box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);";
    }
  }
  return isTrue;
}

function removeValue(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].value = "";
  }
}

function emailIsValid(element) {
  if (!element.value.endsWith("@gmail.com")) {
    element.style = "box-shadow: 0 3px 8px rgba(224, 0, 0, 0.7);";
    return true;
  }
}

for (const element of elements) {
  element.addEventListener("input", () => {
    element.style = "box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);";
    formError.style.display = "none";
  });
}
