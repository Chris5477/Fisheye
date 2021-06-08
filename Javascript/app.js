import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM, ELEMENTMODAL } from "./constant.js";
import { openModal, closeModal, closeLightbox, hiddenElement, pictureInLightbox, videoInLightbox } from "./function.js";
import { validData } from "./validForm.js";
import { responsePromise } from "./response.js";



fetch("./data.json")
  .then((res) => res.json())
  .then(responsePromise);

ELEMENTBTN.btnContact.addEventListener("click", openModal);
ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);

let keyPicture = null;

ELEMENTHTML.allMedia.forEach((el, key) => {
  el.addEventListener("click", () => {
    ELEMENTMODAL.lightBox.classList.add("show_lightbox");
    hiddenElement();
    const srcMedia = el.getAttribute("src");
    srcMedia.match("jpg")? ELEMENTHTML.photo.setAttribute("src", srcMedia) : ELEMENTHTML.movie.setAttribute("src",srcMedia);
    keyPicture = key;
    return keyPicture
  })
} )

ELEMENTHTML.allMedia.forEach(el =>(
  el.addEventListener("keydown", (event) => {
  const trigger = event.key;
  if(trigger === "Enter"){
    ELEMENTMODAL.lightBox.classList.add("show_lightbox");
    hiddenElement();
    const srcMedia = el.getAttribute("src");
    srcMedia.match("jpg") ? ELEMENTHTML.photo.setAttribute("src", srcMedia) : ELEMENTHTML.movie.setAttribute("src",srcMedia);
  }
})))



//fonction permettant de revenir à l'image précédente

export const previousPicture = (array, member) => {
  
  ELEMENTBTN.btnNext.removeAttribute("disabled");
  keyPicture--;
  keyPicture === 0 ?ELEMENTBTN.btnPrevious.setAttribute("disabled", "true") : "";
  const sourceMedia = array[keyPicture];
  return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(member ,sourceMedia);
  // if (keyPicture === 0) {
  //   ELEMENTBTN.btnPrevious.setAttribute("disabled", "true");
  // }
};

// fonction permettant de passer à l'image suivante

export const nextPicture = (array, member) => {
  ELEMENTBTN.btnPrevious.removeAttribute("disabled");
  keyPicture++;
  keyPicture == array.length ? keyPicture-- &&  ELEMENTBTN.btnNext.setAttribute("disabled", "true") : "";
  const sourceMedia = array[keyPicture]; 
  return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(member, sourceMedia);
  // if (keyPicture == array.length) {
  //   keyPicture--;
  //   ELEMENTBTN.btnNext.setAttribute("disabled", "true");
  // }
};

// fonction qui permet la navigation au clavier sur la lightbox

export const keyboardLightbox = (array, member) => {
  const trigger = event.key;
  const sourceMedia = array[keyPicture];
  if (trigger === "ArrowLeft") {
    ELEMENTBTN.btnNext.removeAttribute("disabled");
    keyPicture--;
    if (keyPicture < 0) {
      keyPicture++;
      ELEMENTBTN.btnPrevious.setAttribute("disabled", "true");
    }
    return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(member, sourceMedia);
    
  }
  if (trigger === "ArrowRight") {
    ELEMENTBTN.btnPrevious.removeAttribute("disabled");
    keyPicture++;
    if (keyPicture == array.length) {
      keyPicture--;
      ELEMENTBTN.btnNext.setAttribute("disabled", "true");
    }
    return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(member, sourceMedia);
  }

  if (trigger === "Escape") {
    closeLightbox();
  }
};

ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
ELEMENTFORM.formContact.addEventListener("submit", validData);

