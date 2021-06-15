import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { dataProfil, sortJson, showMedia,  createElements, openModal,closeModal, newContainer, sortMedia, previousMedia, nextMedia, keyboardLightbox, closeLightbox} from "./function.js";
import { validData } from "./validForm.js";

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const objPhotographer = data.photographers;
    const objMedia = data.media;
    dataProfil(objPhotographer, 2);
    const tracy = sortJson(objMedia, 82);
    ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe contient ${tracy.length} photos/videos`;
    createElements(tracy)
    showMedia(tracy, "Tracy");
    newContainer(tracy, "Tracy");
    ELEMENTBTN.btnContact.addEventListener("click", openModal);
    ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
    ELEMENTFORM.formContact.addEventListener("submit", validData);
    ELEMENTFORM.select.addEventListener("input", () => sortMedia(tracy, "Tracy"));
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousMedia());
    ELEMENTBTN.btnNext.addEventListener("click", () => nextMedia());
    document.addEventListener("keydown", (event) => keyboardLightbox());
    ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
  });
