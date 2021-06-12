import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { dataProfil, sortJson, showMedia,  createElements, openModal,closeModal, sortMedia, newContainer, closeLightbox, previousMedia, nextMedia, keyboardLightbox} from "./function.js";
import { validData } from "./validForm.js";
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const objPhotographer = data.photographers;
    const objMedia = data.media;
    dataProfil(objPhotographer, 5);
    const marcel = sortJson(objMedia, 195);
    ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${marcel.length} photos/videos`;
    showMedia(marcel, "Marcel");
    createElements(marcel),
    newContainer(marcel, "Marcel");
    ELEMENTBTN.btnContact.addEventListener("click", openModal);
    ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
    ELEMENTFORM.formContact.addEventListener("submit", validData);
    ELEMENTFORM.select.addEventListener("input", () => sortMedia(marcel, "Marcel"));
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousMedia());
    ELEMENTBTN.btnNext.addEventListener("click", () => nextMedia());
    document.addEventListener("keydown", (event) => keyboardLightbox());
    ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
  });
