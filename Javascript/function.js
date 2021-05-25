import { ELEMENTHTML } from "./constant.js";

export const openModal = () => {
  ELEMENTHTML.modal.classList.add("openModal");
  hiddenElement();
};

export const closeModal = () => {
  ELEMENTHTML.modal.classList.remove("openModal");
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
  ELEMENTHTML.lightBox.classList.add("show_lightbox");
  hiddenElement();
};

export const closeLightbox = () => {
  ELEMENTHTML.lightBox.classList.remove("show_lightbox");
  showElement();
};
