import { ELEMENTHTML, ELEMENTMODAL } from "./constant.js";

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
}

export const hiddenElement = () => {
  ELEMENTHTML.mainPageElement.classList.add("hiddenElement");
};

export const showElement = () => {
  ELEMENTHTML.mainPageElement.classList.remove("hiddenElement");
};

export const openLightbox = () => {
  ELEMENTMODAL.lightBox.classList.add("show_lightbox");
  hiddenElement();
};

export const closeLightbox = () => {
  ELEMENTMODAL.lightBox.classList.remove("show_lightbox");
  showElement();
};

let key = 0;

export const previousPicture = (key) => {
  key--
  ELEMENTHTML.photo.setAttribute("src", mimiPicture[0])
}


export const nextPicture = (key) => {
  key++
  ELEMENTHTML.photo.setAttribute("src", mimiPicture[key])
}
