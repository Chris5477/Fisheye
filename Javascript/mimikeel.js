import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { dataProfil, sortJson, createElements, showMedia, newContainer, openModal, closeModal, sortMedia, previousMedia, nextMedia, keyboardLightbox ,closeLightbox,} from "./function.js";
import { validData } from "./validForm.js";

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const objPhotographer = data.photographers;
    const objMedia = data.media;

    dataProfil(objPhotographer, 0);
    const mimi = sortJson(objMedia, 243);
    ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe contient ${mimi.length} photos/videos`;
    createElements(mimi);
    showMedia(mimi, "Mimi");
    newContainer(mimi, "Mimi");
    ELEMENTBTN.btnContact.addEventListener("click", openModal);
    ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
    ELEMENTFORM.formContact.addEventListener("submit", validData);
    ELEMENTFORM.select.addEventListener("input", () => sortMedia(mimi, "Mimi"));
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousMedia());
    ELEMENTBTN.btnNext.addEventListener("click", () => nextMedia());
    document.addEventListener("keydown", (event) => keyboardLightbox()); 
    ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
  });
