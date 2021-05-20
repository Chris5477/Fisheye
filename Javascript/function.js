import { ELEMENTHTML } from "./constant.js";

export const openModal = () => ELEMENTHTML.modal.className="openModal";
export const closeModal = () => ELEMENTHTML.modal.classList.remove("openModal");