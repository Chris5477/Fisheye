import { ELEMENTHTML } from "./constant.js";
import { openModal, closeModal, openLightbox, closeLightbox } from "./function.js";

ELEMENTHTML.btnContact.addEventListener("click", openModal);
ELEMENTHTML.btnCloseModal.addEventListener("click", closeModal);
  ELEMENTHTML.bigPicture.forEach(el =>el.addEventListener("click", openLightbox));

  ELEMENTHTML.btnCloseLightbox.addEventListener("click", closeLightbox);

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const mimi = data.media.filter((item) => item.photographerId == 243);
    const ellie = data.media.filter((item) => item.photographerId == 930);
    const tracy = data.media.filter((item) => item.photographerId == 82);
    const nabeel = data.media.filter((item) => item.photographerId == 527);
    const rhode = data.media.filter((item) => item.photographerId == 925);
    const marcel = data.media.filter((item) => item.photographerId == 195)
  });
  

