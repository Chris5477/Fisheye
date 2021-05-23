import { ELEMENTHTML } from "./constant.js";

export const openModal = () => {
  ELEMENTHTML.modal.classList.add("openModal");
  hiddenElement();
};

export const closeModal = () => {
  ELEMENTHTML.modal.classList.remove("openModal");
  showElement();
};

export const hiddenElement = () => {
  ELEMENTHTML.mainPageElement.classList.add("hiddenElement");
};

export const showElement = () => {
  ELEMENTHTML.mainPageElement.classList.remove("hiddenElement");
};
