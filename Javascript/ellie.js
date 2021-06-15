import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM} from "./constant.js";
import { dataProfil, sortJson, showMedia,  createElements, openModal,closeModal,previousMedia, nextMedia, keyboardLightbox, newContainer, sortMedia, closeLightbox } from "./function.js";
import { validData } from "./validForm.js";
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const objPhotographer = data.photographers;
    const objMedia = data.media;

    dataProfil(objPhotographer, 1);
    const ellie = sortJson(objMedia, 930);
    ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe contient ${ellie.length} photos/videos`;
    createElements(ellie);
    showMedia(ellie, "Ellie_Rose");
    newContainer(ellie, "Ellie_Rose");
    ELEMENTBTN.btnContact.addEventListener("click", openModal);
    ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
    ELEMENTFORM.formContact.addEventListener("submit", validData);
    ELEMENTFORM.select.addEventListener("input", () => sortMedia(ellie, "Ellie_Rose"));
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousMedia());
    ELEMENTBTN.btnNext.addEventListener("click", () => nextMedia());
    document.addEventListener("keydown", (event) => keyboardLightbox());
    ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
  });
