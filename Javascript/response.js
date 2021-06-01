import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { previousPicture, nextPicture, keyboardLightbox, dataProfil, sortJson, utilData, onlyPicture, showPicture, showVideo, sortPicture, /*likePicture*/} from "./function.js";

export const responsePromise = (data) => {

  const objPhotographer = data.photographers;
  const objMedia = data.media;
  const array = [];

  ELEMENTFORM.select.addEventListener("click",() => sortPicture(array));

  

  if (ELEMENTHTML.title.innerHTML == "Mimi Keel | FishEye") {
    dataProfil(objPhotographer, 0);
    const mimi = sortJson(objMedia, 243);
    utilData(mimi, "Mimi", array);
    const mimiPicture = onlyPicture(array);
    showPicture(array);
    // likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(mimiPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(mimiPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(mimiPicture));
    showVideo("Mimi",mimi);
  }

  if (ELEMENTHTML.title.innerHTML == "Ellie-Rose Wilkens | FishEye") {
    dataProfil(objPhotographer, 1);
    const ellie = sortJson(objMedia, 930);
    utilData(ellie, "Ellie_Rose", array);
    const elliePicture = onlyPicture(array);
    showPicture(array);
    // likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(elliePicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(elliePicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(elliePicture));
    showVideo("Ellie_Rose", ellie)
    
  }

  if (ELEMENTHTML.title.innerHTML == "Tracy Galindo | FishEye") {
    const tracy = sortJson(objMedia, 82);
    dataProfil(objPhotographer, 2);
    utilData(tracy, "Tracy", array);
    const tracyPicture = onlyPicture(array);
    showPicture(array);
    // likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(tracyPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(tracyPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(tracyPicture));
    showVideo("Tracy", tracy)
  }

  if (ELEMENTHTML.title.innerHTML == "Nabeel Bradford | FishEye") {
    dataProfil(objPhotographer, 3);
    const nabeel = sortJson(objMedia, 527);
    utilData(nabeel, "Nabeel", array);
    const nabeelPicture = onlyPicture(array);
    showPicture(array);
    // likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(nabeelPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(nabeelPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(nabeelPicture));
    showVideo("Nabeel", nabeel)
  }

  if (ELEMENTHTML.title.innerHTML == "Rhode Dubois | FishEye") {
    dataProfil(objPhotographer, 4);
    const rhode = sortJson(objMedia, 925);
    utilData(rhode, "Rhode", array);
    const rhodePicture = onlyPicture(array);
    showPicture(array);
    // likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(rhodePicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(rhodePicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(rhodePicture));
    showVideo("Rhode", rhode)
  }

  if (ELEMENTHTML.title.innerHTML == "Marcel Nikolic | FishEye") {
    dataProfil(objPhotographer, 5);
    const marcel = sortJson(objMedia, 195);
    utilData(marcel, "Marcel", array);
    const marcelPicture = onlyPicture(array);
    showPicture(array);
    // likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(marcelPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(marcelPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(marcelPicture));
    showVideo("Marcel", marcel)
  }
};