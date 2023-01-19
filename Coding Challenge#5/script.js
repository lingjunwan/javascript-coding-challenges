"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

// add fuction to close the Modal by using escape on your keyboard
this.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

modal.addEventListener("keydown", function (e) {
  if (e.key === "space") {
    openModal();
  }
});
