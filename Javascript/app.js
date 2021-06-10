import {  ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { openModal, closeModal} from "./function.js";
import { validData } from "./validForm.js";
import { responsePromise } from "./response.js";

fetch("./data.json")
  .then((res) => res.json())
  .then(responsePromise);

ELEMENTBTN.btnContact.addEventListener("click", openModal);
ELEMENTBTN.btnCloseModal.addEventListener("click", closeModal);
ELEMENTFORM.formContact.addEventListener("submit", validData);

