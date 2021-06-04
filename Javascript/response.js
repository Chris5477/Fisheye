import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { previousPicture, nextPicture, keyboardLightbox, dataProfil, sortJson, utilData, showPicture, showVideo, sortPicture, onlyPicture} from "./function.js";

export const responsePromise = (data) => {

  const objPhotographer = data.photographers;
  const objMedia = data.media;
  
  if (ELEMENTHTML.title.innerHTML == "Mimi Keel | FishEye") {
    dataProfil(objPhotographer, 0);
    const mimi = sortJson(objMedia, 243);
    const metaData = utilData(mimi, "Mimi");
    const mimiPicture = onlyPicture(metaData)
    showPicture(metaData);
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(mimiPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(mimiPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(mimiPicture));
    showVideo("Mimi",mimi);
  }

  if (ELEMENTHTML.title.innerHTML == "Ellie-Rose Wilkens | FishEye") {
    dataProfil(objPhotographer, 1);
    const ellie = sortJson(objMedia, 930);
    const metaData = utilData(ellie, "Ellie_Rose");
    const elliePicture = onlyPicture(metaData)
    showPicture(metaData);
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(elliePicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(elliePicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(elliePicture));
    showVideo("Ellie_Rose", ellie)
    
  }

  if (ELEMENTHTML.title.innerHTML == "Tracy Galindo | FishEye") {
    const tracy = sortJson(objMedia, 82);
    dataProfil(objPhotographer, 2);
    const metaData = utilData(tracy, "Tracy");
    const tracyPicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(tracyPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(tracyPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(tracyPicture));
    showVideo("Tracy", tracy)
  }

  if (ELEMENTHTML.title.innerHTML == "Nabeel Bradford | FishEye") {
    dataProfil(objPhotographer, 3);
    const nabeel = sortJson(objMedia, 527);
    const metaData = utilData(nabeel, "Nabeel");
    const nabeelPicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(nabeelPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(nabeelPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(nabeelPicture));
    showVideo("Nabeel", nabeel)
  }

  if (ELEMENTHTML.title.innerHTML == "Rhode Dubois | FishEye") {
    dataProfil(objPhotographer, 4);
    const rhode = sortJson(objMedia, 925);
    const metaData = utilData(rhode, "Rhode");
    const rhodePicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(rhodePicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(rhodePicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(rhodePicture));
    showVideo("Rhode", rhode)
  }

  if (ELEMENTHTML.title.innerHTML == "Marcel Nikolic | FishEye") {
    dataProfil(objPhotographer, 5);
    const marcel = sortJson(objMedia, 195);
    const metaData = utilData(marcel, "Marcel");
    const marcelPicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(marcelPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(marcelPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(marcelPicture));
    showVideo("Marcel", marcel)
  }
  
};