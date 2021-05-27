import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { openModal, closeModal, openLightbox, closeLightbox, previousPicture, nextPicture } from "./function.js";
import { validData } from "./validForm.js";
import { responsePromise } from "./response.js";

ELEMENTBTN.btnContact.addEventListener("click", openModal);
ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
ELEMENTHTML.allPicturePhotographer.forEach((el) => el.addEventListener("click", openLightbox));

ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);

fetch("./data.json")
  .then((res) => res.json())
  .then(responsePromise);

ELEMENTFORM.formContact.addEventListener("submit", validData);
ELEMENTBTN.btnPrevious.addEventListener("click", previousPicture);
ELEMENTBTN.btnNext.addEventListener("click", nextPicture);
