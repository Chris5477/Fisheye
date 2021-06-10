import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM, ELEMENTMODAL } from "./constant.js";
import {
  dataProfil,
  sortJson,
  createElements,
  showMedia,
  newContainer,
  sortMedia,
  hiddenElement,
  pictureInLightbox,
  videoInLightbox,
  closeLightbox,
} from "./function.js";

export const responsePromise = (data) => {
  const objPhotographer = data.photographers;
  const objMedia = data.media;

  if (ELEMENTHTML.title.innerHTML == "Mimi Keel | FishEye") {
    dataProfil(objPhotographer, 0);
    const mimi = sortJson(objMedia, 243);
    ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${mimi.length} photos/videos`;
    createElements(mimi);
    showMedia(mimi, "Mimi");
    newContainer(mimi, "Mimi");
    ELEMENTFORM.select.addEventListener("input", () => sortMedia(mimi, "Mimi"));

    const urlMedia = mimi.map((item) => (item.image != undefined ? "ressources/Mimi/" + item.image : "ressources/Mimi/" + item.video));

    let keyPicture = null;
    const allMedia = [...document.querySelectorAll(".media")];
    allMedia.forEach((el, key) => {
      el.addEventListener("click", () => {
        ELEMENTMODAL.lightBox.classList.add("show_lightbox");
        hiddenElement();
        const srcMedia = el.getAttribute("src");
        srcMedia.match("jpg") ? ELEMENTHTML.photo.setAttribute("src", srcMedia) : ELEMENTHTML.movie.setAttribute("src", srcMedia);
        keyPicture = key;
        return keyPicture;
      });
    });

    allMedia.forEach((el) =>
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

    const btnPrev = document.querySelector(".previous");
    const btnNext = document.querySelector(".next");
    const previousPicture = () => {
      btnNext.removeAttribute("disabled");
      keyPicture--;
      keyPicture === 0 ? btnPrev.setAttribute("disabled", "true") : "";
      const sourceMedia = urlMedia[keyPicture];
      return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
    };
    btnPrev.addEventListener("click", () => previousPicture());

    const nextPicture = () => {
      btnPrev.removeAttribute("disabled");
      keyPicture++;
      keyPicture == urlMedia.length ? keyPicture-- && btnNext.setAttribute("disabled", "true") : "";
      const sourceMedia = urlMedia[keyPicture];
      return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
    };

    document.addEventListener("keydown", (event) => keyboardLightbox());

    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture());

    const keyboardLightbox = () => {
      const trigger = event.key;
      const sourceMedia = urlMedia[keyPicture];
      if (trigger === "ArrowLeft") {
        btnNext.removeAttribute("disabled");
        keyPicture--;
        if (keyPicture < 0) {
          keyPicture++;
          btnPrev.setAttribute("disabled", "true");
        }
        return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
      }
      if (trigger === "ArrowRight") {
        btnPrev.removeAttribute("disabled");
        keyPicture++;
        if (keyPicture == urlMedia.length) {
          keyPicture--;
          btnNext.setAttribute("disabled", "true");
        }
        return sourceMedia.match("jpg") ? pictureInLightbox(sourceMedia) : videoInLightbox(sourceMedia);
      }

      if (trigger === "Escape") {
        closeLightbox();
      }

      ELEMENTBTN.btnCloseLightbox.addEventListener("click", closeLightbox);
    };

    const icon = [...document.querySelectorAll(".fa-heart")];
    const liked = [...document.querySelectorAll(".count_like")];
    icon.forEach((el, key) => el.addEventListener("click", () => (liked[key].innerHTML = mimi[key].likes++)));
  }
    if (ELEMENTHTML.title.innerHTML == "Ellie-Rose Wilkens | FishEye") {
      dataProfil(objPhotographer, 1);
      const ellie = sortJson(objMedia, 930);
      ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${ellie.length} photos/videos`;
      createElements(ellie);
      showMedia(ellie, "Ellie_Rose");
      newContainer(ellie, "Ellie_Rose");
      ELEMENTFORM.select.addEventListener("input", () => sortMedia(ellie, "Ellie_Rose"));
      const icon = [...document.querySelectorAll(".fa-heart")];
      const liked = [...document.querySelectorAll(".count_like")];
      icon.forEach((el, key) => el.addEventListener("click", () => (liked[key].innerHTML = ellie[key].likes++)));
    }

    if (ELEMENTHTML.title.innerHTML == "Tracy Galindo | FishEye") {
      dataProfil(objPhotographer, 2);
      const tracy = sortJson(objMedia, 82);
      ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${tracy.length} photos/videos`;
      showMedia(tracy, "Tracy");
      newContainer(tracy, "Tracy");
      ELEMENTFORM.select.addEventListener("input", () => sortMedia(tracy, "Tracy"));
      const icon = [...document.querySelectorAll(".fa-heart")];
      const liked = [...document.querySelectorAll(".count_like")];
      icon.forEach((el, key) => el.addEventListener("click", () => (liked[key].innerHTML = tracy[key].likes++)));
    }

    if (ELEMENTHTML.title.innerHTML == "Nabeel Bradford | FishEye") {
      dataProfil(objPhotographer, 3);
      const nabeel = sortJson(objMedia, 527);
      ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${nabeel.length} photos/videos`;
      showMedia(nabeel, "Nabeel");
      newContainer(nabeel, "Nabeel");
      ELEMENTFORM.select.addEventListener("input", () => sortMedia(nabeel, "Nabeel"));
      const icon = [...document.querySelectorAll(".fa-heart")];
      const liked = [...document.querySelectorAll(".count_like")];
      icon.forEach((el, key) => el.addEventListener("click", () => (liked[key].innerHTML = nabeel[key].likes++)));
    }

    if (ELEMENTHTML.title.innerHTML == "Rhode Dubois | FishEye") {
      dataProfil(objPhotographer, 4);
      const rhode = sortJson(objMedia, 925);
      ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${rhode.length} photos/videos`;
      showMedia(rhode, "Rhode");
      newContainer(rhode, "Rhode");
      ELEMENTFORM.select.addEventListener("input", () => sortMedia(rhode, "Rhode"));
      const icon = [...document.querySelectorAll(".fa-heart")];
      const liked = [...document.querySelectorAll(".count_like")];
      icon.forEach((el, key) => el.addEventListener("click", () => (liked[key].innerHTML = rhode[key].likes++)));
    }

    if (ELEMENTHTML.title.innerHTML == "Marcel Nikolic | FishEye") {
      dataProfil(objPhotographer, 5);
      const marcel = sortJson(objMedia, 195);
      ELEMENTHTML.totalMedia.innerHTML = `La galerie de ce photographe content ${marcel.length} photos/videos`;
      showMedia(marcel, "Marcel");
      newContainer(marcel, "Marcel");
      ELEMENTFORM.select.addEventListener("input", () => sortMedia(marcel, "Marcel"));
      const icon = [...document.querySelectorAll(".fa-heart")];
      const liked = [...document.querySelectorAll(".count_like")];
      icon.forEach((el, key) => el.addEventListener("click", () => (liked[key].innerHTML = marcel[key].likes++)));
    }
  
};
