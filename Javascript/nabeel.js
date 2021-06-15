import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { dataProfil, sortJson, showMedia, createElements, openModal,closeModal, newContainer, sortMedia, closeLightbox, previousMedia, nextMedia, keyboardLightbox} from "./function.js";
import { validData } from "./validForm.js";
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const objPhotographer = data.photographers;
    const objMedia = data.media;

    dataProfil(objPhotographer, 3);
    const nabeel = sortJson(objMedia, 527);
    ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe contient ${nabeel.length} photos/videos`;
    createElements(nabeel)
    showMedia(nabeel, "Nabeel");
    newContainer(nabeel, "Nabeel");
    ELEMENTBTN.btnContact.addEventListener("click", openModal);
    ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
    ELEMENTFORM.formContact.addEventListener("submit", validData);
    ELEMENTFORM.select.addEventListener("input", () => sortMedia(nabeel, "Nabeel"));
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousMedia());
    ELEMENTBTN.btnNext.addEventListener("click", () => nextMedia());
    document.addEventListener("keydown", (event) => keyboardLightbox());
    ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
  });
