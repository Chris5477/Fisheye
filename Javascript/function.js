import { ELEMENTBTN, ELEMENTHTML, ELEMENTMODAL } from "./constant.js";

export const openModal = () => {
  ELEMENTMODAL.modal.classList.add("openModal");
  hiddenElement();
};

export const closeModal = () => {
  ELEMENTMODAL.modal.classList.remove("openModal");
  showElement();
};

export const informUser = (paragraphe, msg, container) => {
  paragraphe.textContent = msg;
  paragraphe.classList.add("error");
  container.appendChild(paragraphe);
};

export const hiddenElement = () => {
  ELEMENTHTML.mainPageElement.classList.add("hiddenElement");
};

export const showElement = () => {
  ELEMENTHTML.mainPageElement.classList.remove("hiddenElement");
};

let i = 0;

export const previousPicture = (member) => {
  i--;
  i === 0 ? ELEMENTBTN.btnPrevious.setAttribute("disabled", "true") : ELEMENTHTML.photo.setAttribute("src", member[i]);
};
export const nextPicture = (member) => {
  i++;
  i < member.length ? ELEMENTHTML.photo.setAttribute("src", member[i]) : ELEMENTBTN.btnNext.setAttribute("disabled", "true");
};

export const keyboardLightbox = (member) => {
  const trigger = event.key;
 
  if (trigger === "ArrowLeft") {
    i--;
    i === 0 ? ELEMENTBTN.btnPrevious.setAttribute("disabled", "true") : ELEMENTHTML.photo.setAttribute("src", member[i]);
  } else if (trigger === "ArrowRight") {
    i++;
    i < member.length ? ELEMENTHTML.photo.setAttribute("src", member[i]) : ELEMENTBTN.btnNext.setAttribute("disabled", "true");
  }

  if(trigger ==="Escape"){
    closeLightbox()
  }
};

export const closeLightbox = () => {
  ELEMENTMODAL.lightBox.classList.remove("show_lightbox");
  showElement();
};
