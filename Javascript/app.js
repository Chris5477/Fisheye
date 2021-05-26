import { ELEMENTHTML } from "./constant.js";
import { openModal, closeModal, openLightbox, closeLightbox } from "./function.js";
import { validData } from "./validForm.js";
import { responsePromise } from './response.js';

ELEMENTHTML.btnContact.addEventListener("click", openModal);
ELEMENTHTML.btnCloseModal.addEventListener("click", closeModal);
  ELEMENTHTML.bigPicture.forEach(el =>el.addEventListener("click", openLightbox));

  ELEMENTHTML.btnCloseLightbox.addEventListener("click", closeLightbox);


 
fetch("./data.json")
  .then((res) => res.json())
  .then((responsePromise));
  
  ELEMENTHTML.formContact.addEventListener("submit",validData)
