import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { dataProfil, sortJson, utilData, showPicture, showVideo, sortPicture, onlyPicture} from "./function.js";
import { previousPicture, nextPicture, keyboardLightbox} from "./app.js";

export const responsePromise = (data) => {

  const objPhotographer = data.photographers;
  const objMedia = data.media;
  
  if (ELEMENTHTML.title.innerHTML == "Mimi Keel | FishEye") {

    // On recupere les donnees JSON qui me sont utiles (titre , likes , date ...)
    dataProfil(objPhotographer, 0);

    // On isole toutes les données concernant mimi grace a son id 
    const mimi = sortJson(objMedia, 243);

    // On recupere les donnees JSON qui me sont utiles (titre , likes , date ...)
    const metaData = utilData(mimi, "Mimi");

    // Isolalement des photos de mimi
    const mimiPicture = onlyPicture(metaData)

    //Afficher les images sur le navigateur
    showPicture(metaData);

    //Afficher les vidéos sur le navigateur
    const videoMember = showVideo("Mimi",mimi);

    // Fusion du tableau videoMember et mimiPicture pour la lightbox
    const allMedia = videoMember.concat(mimiPicture);

    //Au changement de valeur pour le select , tri les images par titre date ou popularité
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));

    //Au clique de l 'element liked , incremente le nombre de like
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))

    // Au clique sur le bouton previous , reviens sur l image precedente
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(allMedia, "Mimi"));

    // Au clique sur le bouton next , passe à l'image suivante
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(allMedia, "Mimi"));

    //Permet de naviguer sur la lightbox au clavier
    document.addEventListener("keydown", (event) => keyboardLightbox(allMedia, "Mimi"));

  }

  if (ELEMENTHTML.title.innerHTML == "Ellie-Rose Wilkens | FishEye") {
    dataProfil(objPhotographer, 1);
    const ellie = sortJson(objMedia, 930);
    const metaData = utilData(ellie, "Ellie_Rose");
    const elliePicture = onlyPicture(metaData)
    showPicture(metaData);
    const videoMember = showVideo("ELlie_Rose",ellie);
    const allMedia = videoMember.concat(elliePicture);
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(allMedia, "Ellie_Rose"));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(allMedia, "Ellie_Rose"));
    document.addEventListener("keydown", (event) => keyboardLightbox(allMedia, "Ellie_Rose"));
    showVideo("Ellie_Rose", ellie)
    
  }

  if (ELEMENTHTML.title.innerHTML == "Tracy Galindo | FishEye") {
    const tracy = sortJson(objMedia, 82);
    dataProfil(objPhotographer, 2);
    const metaData = utilData(tracy, "Tracy");
    const tracyPicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    const videoMember = showVideo("Tracy", tracy);
    const allMedia = videoMember.concat(tracyPicture);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(allMedia, "Tracy"));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(allMedia, "Tracy"));
    document.addEventListener("keydown", (event) => keyboardLightbox(allMedia, "Tracy"));
    showVideo("Tracy", tracy)
  }

  if (ELEMENTHTML.title.innerHTML == "Nabeel Bradford | FishEye") {
    dataProfil(objPhotographer, 3);
    const nabeel = sortJson(objMedia, 527);
    const metaData = utilData(nabeel, "Nabeel");
    const nabeelPicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    const videoMember = showVideo("Nabeel", nabeel);
    const allMedia = videoMember.concat(nabeelPicture);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(allMedia, "Nabeel"));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(allMedia, "Nabeel"));
    document.addEventListener("keydown", (event) => keyboardLightbox(allMedia, "Nabeel"));
    showVideo("Nabeel", nabeel)
  }

  if (ELEMENTHTML.title.innerHTML == "Rhode Dubois | FishEye") {
    dataProfil(objPhotographer, 4);
    const rhode = sortJson(objMedia, 925);
    const metaData = utilData(rhode, "Rhode");
    const rhodePicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    const videoMember = showVideo("Rhode", rhode);
    const allMedia = videoMember.concat(rhodePicture);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(allMedia, "Rhode"));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(allMedia, "Rhode"));
    document.addEventListener("keydown", (event) => keyboardLightbox(allMedia, "Rhode"));
    showVideo("Rhode", rhode)
  }

  if (ELEMENTHTML.title.innerHTML == "Marcel Nikolic | FishEye") {
    dataProfil(objPhotographer, 5);
    const marcel = sortJson(objMedia, 195);
    const metaData = utilData(marcel, "Marcel");
    const marcelPicture = onlyPicture(metaData)
    ELEMENTFORM.select.addEventListener("input",() => sortPicture(metaData));
    showPicture(metaData);
    const videoMember = showVideo("Marcel",marcel);
    const allMedia = videoMember.concat(marcelPicture);
    ELEMENTHTML.liked.forEach((el,key) => el.addEventListener("click",() =>  el.innerHTML = metaData[key].likes++))
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(allMedia, "Marcel"));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(allMedia, "Marcel"));
    document.addEventListener("keydown", (event) => keyboardLightbox(allMedia, "Marcel"));
    showVideo("Marcel", marcel)
  }
  
};