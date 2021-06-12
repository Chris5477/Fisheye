import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { dataProfil, sortJson, showMedia, newContainer, createElements, openModal,closeModal,sortMedia, closeLightbox, previousMedia, nextMedia, keyboardLightbox} from "./function.js";
import { validData } from "./validForm.js";

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const objPhotographer = data.photographers;
    const objMedia = data.media;

    dataProfil(objPhotographer, 4);
    const rhode = sortJson(objMedia, 925);
    ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${rhode.length} photos/videos`;
    createElements(rhode)
    showMedia(rhode, "Rhode");
    newContainer(rhode, "Rhode");
    ELEMENTBTN.btnContact.addEventListener("click", openModal);
    ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
    ELEMENTFORM.formContact.addEventListener("submit", validData);
    ELEMENTFORM.select.addEventListener("input", () => sortMedia(rhode, "Rhode"));
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousMedia());
    ELEMENTBTN.btnNext.addEventListener("click", () => nextMedia());
    document.addEventListener("keydown", (event) => keyboardLightbox());
    ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
  });
