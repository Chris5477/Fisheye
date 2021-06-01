import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM, ELEMENTMODAL } from "./constant.js";
import { openModal, closeModal, closeLightbox, hiddenElement, } from "./function.js";
import { validData } from "./validForm.js";
import { responsePromise } from "./response.js";

fetch("./data.json")
  .then((res) => res.json())
  .then(responsePromise);

ELEMENTBTN.btnContact.addEventListener("click", openModal);
ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);

ELEMENTHTML.allPicturePhotographer.forEach((el) => {
  el.addEventListener("click", () => {
    ELEMENTMODAL.lightBox.classList.add("show_lightbox");
    hiddenElement();
    const srcPicture = el.getAttribute("src");
    ELEMENTHTML.photo.setAttribute("src", srcPicture);
  });
});

ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
ELEMENTFORM.formContact.addEventListener("submit", validData);

