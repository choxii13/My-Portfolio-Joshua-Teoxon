// for my form element // sending email
const formElement = document.querySelector("form");

export function sendingEmail(event) {
  const fd = new FormData(event.target);
  const data = Object.fromEntries(fd.entries());
  event.target.action = `mailto:teoxonjoshua13@gmail.com?subject=${data.subject}&amp&body=Fullname:${data.firstname}${data.lastname}%0Dmessage:${data.body}`;
}
formElement.addEventListener("submit", sendingEmail);
