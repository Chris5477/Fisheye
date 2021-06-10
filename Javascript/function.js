import { ELEMENTHTML, ELEMENTMODAL, ELEMENTFORM } from "./constant.js";


export const showAllTags = () => {
  ELEMENTHTML.worker.forEach((item) => (item.style.display = "initial"));
};

export const dataProfil = (obj, key) => {
  ELEMENTHTML.nameMember.textContent = obj[key].name;
  ELEMENTHTML.pictureProfil.setAttribute("src", "ressources/Photographes/" + obj[key].portrait);
  ELEMENTHTML.localisationMember.textContent = obj[key].country + "," + obj[key].city;
  ELEMENTHTML.sloganMember.textContent = obj[key].tagline;
  ELEMENTHTML.pricePhotographer.textContent = obj[key].price + "€/jour";
  for (let index in ELEMENTHTML.tagsMember) {
    ELEMENTHTML.tagsMember[index].textContent = "#" + obj[key].tags[index];
  }
};

export const sortJson = (obj, id) => obj.filter((item) => item.photographerId == id);

const createImgElement = () => {
  ELEMENTHTML.container.innerHTML += `<div role="figure" class="picture">
    <p tabindex="0" class="date"></p>
    <figure>
        <img tabindex="0" class="media" src="" alt=""/>
        <figcaption tabindex="0" class="title describe-media" lang="en"></figcaption>
    </figure>
    <div class="number_like">
      <span class="count_like"></span>
      <span class="fas fa-heart"></span>
    </div>
  </div>`;
};

const createVideoElement = () => {
  ELEMENTHTML.container.innerHTML += `<div role="figure" class="picture">
    <p tabindex="0" class="date"></p>
    <figure>
        <video tabindex="0" class="media" src="" controls>
        <track kind="captions" src="caption_video/mimikeel.vtt" srclang="fr" label="sous-titre français">
    </video>
        <figcaption tabindex="0" class="title describe-media"></figcaption>
    </figure>
    <div class="number_like">
      <span class="count_like"></span>
      <span class="fas fa-heart"></span>
    </div>
  </div> `;
};

export const createElements = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].hasOwnProperty("image") ? createImgElement() : createVideoElement();
  }
};

export const showMedia = (array, member) => {
  const legend = [...document.querySelectorAll(".title")];
  const liked = [...document.querySelectorAll(".count_like")];
  const dateMedia = [...document.querySelectorAll(".date")];
  const media = [...document.querySelectorAll(".media")];
  legend.forEach((item, key) => (item.innerHTML = array[key].title));
  liked.forEach((item, key) => (item.innerHTML = " " + array[key].likes));
  dateMedia.forEach((item, key) => (item.innerHTML = array[key].date));
  media.forEach((item, key) => {
    array[key].hasOwnProperty("image")
      ? item.setAttribute("src", `ressources/${member}/${array[key].image}`)
      : item.setAttribute("src", `ressources/${member}/${array[key].video}`);
  });
};

export const newContainer = (array, member) => {
  if (ELEMENTHTML.container.innerHTML != "") {
    ELEMENTHTML.container.innerHTML = "";
  }
  createElements(array);
  showMedia(array, member);
};

export const sortMedia = (array, member) => {
  if (ELEMENTFORM.select.value === "popularite") {
    array.sort((a, b) => a.likes - b.likes);
    newContainer(array, member);
  } else if (ELEMENTFORM.select.value === "date") {
    array.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    newContainer(array, member);
  } else if (ELEMENTFORM.select.value === "titre") {
    array.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    newContainer(array, member);
  }
};

//fonction d'ouverture de modal

export const openModal = () => {
  ELEMENTMODAL.modal.classList.add("openModal");
  hiddenElement();
};

//fonction de fermeture de modal

export const closeModal = () => {
  ELEMENTMODAL.modal.classList.remove("openModal");
  showElement();
};

//fonction pour informer l'utilisateur d'une donnée saisi incorrect

export const informUser = (paragraphe, msg, container) => {
  paragraphe.textContent = msg;
  paragraphe.classList.add("error");
  container.appendChild(paragraphe);
};

// fonction pour cacher les éléments si modal ouverte

export const hiddenElement = () => {
  ELEMENTHTML.mainPageElement.classList.add("hiddenElement");
  ELEMENTHTML.header.className = "hiddenElement";
};
// fonction pour re afficher les éléments si modale fermer

export const showElement = () => {
  ELEMENTHTML.mainPageElement.classList.remove("hiddenElement");
  ELEMENTHTML.header.className = "pages-header";
};

export const pictureInLightbox = (source) => {
  ELEMENTHTML.movie.style.visibility = "hidden";
  ELEMENTHTML.photo.style.visibility = "visible";
  ELEMENTHTML.photo.setAttribute("src", source);
};

export const videoInLightbox = (source) => {
  ELEMENTHTML.movie.style.visibility = "visible";
  ELEMENTHTML.photo.style.visibility = "hidden";
  ELEMENTHTML.movie.setAttribute("src", source);
  ELEMENTHTML.movie.setAttribute("autoplay", true);
};

export const closeLightbox = () => {
  ELEMENTMODAL.lightBox.classList.remove("show_lightbox");
  showElement();
};