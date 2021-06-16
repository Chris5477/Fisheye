import { ELEMENTHTML, ELEMENTMODAL, ELEMENTFORM, ELEMENTBTN } from "./constant.js";

//////////////////////////////////  FONCTION APPS.JS/////////////////////////////////////////////////////////////////////////////////

export const showAllTags = () => {
  ELEMENTHTML.worker.forEach((item) => (item.style.display = "initial"));
};

/////////////////////////////////// FONCTION PAGES.JS ///////////////////////////////////////////////////////////////////////////////

//Fonction pour définir les informations de profil , obj = data.phototographer , key => index du tableau

export const dataProfil = (obj, key) => {
  // remplit les elements de la clé name de l objet obj
  ELEMENTHTML.nameMember.textContent = obj[key].name;
  // Definit les sources pour les photos de profile
  ELEMENTHTML.pictureProfil.setAttribute("src", "ressources/Photographes/" + obj[key].portrait);
  // Remplit la ville et le pays du photographes
  ELEMENTHTML.localisationMember.textContent = obj[key].country + "," + obj[key].city;
  // Remplit le slogan du photographe
  ELEMENTHTML.sloganMember.textContent = obj[key].tagline;
  // Remplit le prix du photographe
  ELEMENTHTML.pricePhotographer.textContent = obj[key].price + "€/jour";
  //créer une boucle qui récupère tout les indexs du tableau contenat les tags du photographes
  for (let index in ELEMENTHTML.tagsMember) {
    // Chaque tour de boucle , remplit le tag
    ELEMENTHTML.tagsMember[index].textContent = "#" + obj[key].tags[index];
  }
};

//Renvoi dans un tableau , tout les éléments du json contanant un id indiqué en argument
export const sortJson = (obj, id) => obj.filter((item) => item.photographerId == id);

//Creer un elements HTML img en template literrals
const createImgElement = () => {
  ELEMENTHTML.container.innerHTML += `<div role="figure" class="picture">
    <p tabindex="0" class="date"></p>
    <figure>
        <img tabindex="0" class="media label_img" src="" alt=""/>
        <figcaption tabindex="0" class="title describe-media" lang="en"></figcaption>
    </figure>
    <div class="number_like">
      <span class="count_like"></span>
      <span class="icon fas fa-heart"></span>
    </div>
  </div>`;
};

// Creer un élément HTML video en template literrals
const createVideoElement = (member) => {
  ELEMENTHTML.container.innerHTML += `<div role="figure" class="picture">
    <p tabindex="0" class="date"></p>
    <figure>
        <video tabindex="0" class="media" src="" controls>
        <track kind="captions" src="caption_video/${member}.vtt" srclang="fr" label="sous-titre français">
    </video>
        <figcaption tabindex="0" class="title describe-media"></figcaption>
    </figure>
    <div class="number_like">
      <span class="count_like"></span>
      <span class="icon fas fa-heart"></span>
    </div>
  </div> `;
};

//Créer en fonction de sortJson , autant d éléments qu il y a de valeur dans le tableau
export const createElements = (array, member) => {
  // Si la valeur de array[i] a la propriété appel creer une image sinon une video
  for (let i = 0; i < array.length; i++) {
    array[i].hasOwnProperty("image") ? createImgElement() : createVideoElement(member);
  }
};
//AFfiche les media
export const showMedia = (array, member) => {
  // On pointe les éléments qui nous intéresse
  const legend = [...document.querySelectorAll(".title")];
  const liked = [...document.querySelectorAll(".count_like")];
  const dateMedia = [...document.querySelectorAll(".date")];
  const media = [...document.querySelectorAll(".media")];
  const description = [...document.querySelectorAll(".label_img")]
  // Pour chaque element , on remplit par les valeurs du tableau
  legend.forEach((item, key) => (item.innerHTML = array[key].title));
  liked.forEach((item, key) => (item.innerHTML = " " + array[key].likes));
  dateMedia.forEach((item, key) => (item.innerHTML = array[key].date));
  description.forEach((item,key) => item.setAttribute("aria-label", array[key].description))
  media.forEach((item, key) => {
    array[key].hasOwnProperty("image")
      ? item.setAttribute("src", `ressources/${member}/${array[key].image}`)
      : item.setAttribute("src", `ressources/${member}/${array[key].video}`);
      item.setAttribute("alt", array[key].description)
  });
};

//Fonction pour créer remplir la gallerie du photographe
export const newContainer = (array, member) => {
  //Si le conteneur est remplit alors on le vide
  if (ELEMENTHTML.container.innerHTML != "") {
    ELEMENTHTML.container.innerHTML = "";
  }
  // On appelle ces fonctions
  createElements(array, member);
  showMedia(array, member);
  openLightbox();
  openLightBoxKeyboard();
  addLike(array);
  setUrlMedia(array, member);
};

//Fonction pour trier la gallerie
export const sortMedia = (array, member) => {
  // Si popularité est choisi
  if (ELEMENTFORM.select.value === "popularite") {
    // Tri en fonction des likes
    array.sort((a, b) => a.likes - b.likes);
    // Et appelle la fonction newcontainer
    newContainer(array, member);
    //Si date est choisi
  } else if (ELEMENTFORM.select.value === "date") {
    // Convertit les dates en ms et les tri
    array.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    newContainer(array, member);
    // Si title est choisi
  } else if (ELEMENTFORM.select.value === "titre") {
    // tri les titres
    array.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    newContainer(array, member);
  }
};

//fonction d'ouverture de modal

export const openModal = () => {
  //Ajoute la classe openModal
  ELEMENTMODAL.modal.classList.add("openModal");
  hiddenElement();
};

//fonction de fermeture de modal

export const closeModal = () => {
  //Supprime la classe openModal
  ELEMENTMODAL.modal.classList.remove("openModal");
  showElement();
};

//fonction pour informer l'utilisateur d'une donnée saisi incorrect

export const informUser = (paragraphe, msg, container) => {
  // affiche un message //
  paragraphe.textContent = msg;
  // ajoute une classe à l element qui contient le message
  paragraphe.classList.add("error");
  
  paragraphe.setAttribute("autofocus",true);
  // permet de placer le message
  container.appendChild(paragraphe);
};

// variable egal a null qui prendra la valeur de retour de setUrlMedia
let urlMedia = null;

// Permet de n'avoir que les url des medias
const setUrlMedia = (array, member) =>
  (urlMedia = array.map((item) => (item.image != undefined ? "ressources/" + member + "/" + item.image : "ressources/" + member + "/" + item.video)));

// Permet de liker un media
const addLike = (array) => {
  [...document.querySelectorAll(".icon")].forEach((el, key) =>
    el.addEventListener("click", () => ([...document.querySelectorAll(".count_like")][key].innerHTML = array[key].likes++))
  );
};
// Variable egal a null qui prendra la valeur de retour de openLightbox
let keyPicture = null;

//Ouverture lightbox
const openLightbox = () => {
  // lors du clique sur l image permet d afficher la lightbox
  [...document.querySelectorAll(".media")].forEach((el, key) =>
    el.addEventListener("click", () => {
      //Ajoute une classe
      ELEMENTMODAL.lightBox.classList.add("show_lightbox");
      hiddenElement();
      // Recupere l attribut
      const srcMedia = el.getAttribute("src");
      // Si la valeur contient jpg  affiche une image sinon une video
      srcMedia.match("jpg") ? ELEMENTHTML.photo.setAttribute("src", srcMedia) : ELEMENTHTML.movie.setAttribute("src", srcMedia);
      //la valeur de key et affectée a keyPicture et la retourne
      keyPicture = key;
      return keyPicture;
    })
  );
};

// ouverture lightbox au clavier (MEME PRINCIPE QUE OPENLIGHTBOX)
const openLightBoxKeyboard = () => {
  [...document.querySelectorAll(".media")].forEach((el) =>
    el.addEventListener("keydown", (event) => {
      const trigger = event.key;
      if (trigger === "Enter") {
        ELEMENTMODAL.lightBox.classList.add("show_lightbox");
        hiddenElement();
        const srcMedia = el.getAttribute("src");
        srcMedia.match("jpg") ? ELEMENTHTML.photo.setAttribute("src", srcMedia) : ELEMENTHTML.movie.setAttribute("src", srcMedia);
      }
    })
  );
};

//passer au media precedent
export const previousMedia = () => {
  // rend btnNext disponible
  ELEMENTBTN.btnNext.removeAttribute("disabled");
  //decremente keypicture
  keyPicture--;
  // si keyPicture = 0 desactive btnPrevious sinon rien
  keyPicture === 0 ? ELEMENTBTN.btnPrevious.setAttribute("disabled", "true") : "";
  //contient la valeur du tableau d url
  const sourceMedia = urlMedia[keyPicture];
  // si srcMedia finit par jpg appelle une fonction  sinon appelle une fonction
  return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
};

// passer au media suivant
export const nextMedia = () => {
  //Active le bouton btnPrevious
  ELEMENTBTN.btnPrevious.removeAttribute("disabled");
  keyPicture++;
  // si keyPicture = ataille du tableau  decremente keypicture pour pas sortir du tableau et desactive btnNext sinon rien
  keyPicture == urlMedia.length ? keyPicture-- && ELEMENTBTN.btnNext.setAttribute("disabled", "true") : "";
  //contient la valeur du tableau d url
  const sourceMedia = urlMedia[keyPicture];
  // si srcMedia finit par jpg appelle une fonction  sinon appelle une fonction
  return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
};

//navigation au clavier de la lightbox   (MEME PRINCIPE QUE PREVIOUSMEDIA ET NEXTMEDIA)
export const keyboardLightbox = () => {
  const trigger = event.key;
  const sourceMedia = urlMedia[keyPicture];
  if (trigger === "ArrowLeft") {
    ELEMENTBTN.btnNext.removeAttribute("disabled");
    keyPicture--;
    if (keyPicture < 0) {
      keyPicture++;
      ELEMENTBTN.btnPrevious.setAttribute("disabled", "true");
    }
    return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
  }
  if (trigger === "ArrowRight") {
    ELEMENTBTN.btnPrevious.removeAttribute("disabled");
    keyPicture++;
    if (keyPicture == urlMedia.length) {
      keyPicture--;
      ELEMENTBTN.btnNext.setAttribute("disabled", "true");
    }
    return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
  }

  if (trigger === "Escape") {
    closeLightbox();
  }
};

// fonction pour cacher les éléments si modal ouverte
export const hiddenElement = () => {
  // ajoute une classe
  ELEMENTHTML.mainPageElement.classList.add("hiddenElement");
  // ajoute une classe
  ELEMENTHTML.header.className = "hiddenElement";
};

// fonction pour re afficher les éléments si modale fermer
export const showElement = () => {
  //Supprime une classe
  ELEMENTHTML.mainPageElement.classList.remove("hiddenElement");
  //ajjoute une classe
  ELEMENTHTML.header.className = "pages-header";
};

// Affiche une image dans la lightbox
export const pictureInLightbox = (source) => {
  // rend invisible la balise video
  ELEMENTHTML.movie.style.visibility = "hidden";
  // rend visible la balise img
  ELEMENTHTML.photo.style.visibility = "visible";
  // Definit la source de  limage
  ELEMENTHTML.photo.setAttribute("src", source);
};

// Affiche une video dans la lightbox
export const videoInLightbox = (source) => {
  // rend visible la balise video
  ELEMENTHTML.movie.style.visibility = "visible";
  //rend invisible la balise img
  ELEMENTHTML.photo.style.visibility = "hidden";
  //Definit la source de la video
  ELEMENTHTML.movie.setAttribute("src", source);
  //met la video en autoplay
  ELEMENTHTML.movie.setAttribute("autoplay", true);
};

// Fermeture de la modal
export const closeLightbox = () => {
  //supprime une classe
  ELEMENTMODAL.lightBox.classList.remove("show_lightbox");
  showElement();
};
