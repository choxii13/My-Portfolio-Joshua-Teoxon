const modalElement = document.querySelector(".modal-content");

export function modalContent(modal) {
  let modalHtml = "";

  for (let i = 0; i < modal.size; i++) {
    modalHtml += `<img src="./images/${modal.folder}/${i + 1}.png" alt="${
      modal.title
    }">
    <p class="img-length"> </p>`;
  }
  modalElement.innerHTML = modalHtml;
}
