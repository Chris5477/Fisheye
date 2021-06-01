import { ELEMENTHTML, ELEMENTBTN, ELEMENTFORM } from "./constant.js";
import { previousPicture, nextPicture, keyboardLightbox } from "./function.js";
export const responsePromise = (data) => {
  const objPhotographer = data.photographers;
  const objMedia = data.media;
  let i = 0;

  const dataProfil = (key) => {
    ELEMENTHTML.nameMember.textContent = objPhotographer[key].name;
    ELEMENTHTML.localisationMember.textContent = objPhotographer[key].country + "," + objPhotographer[key].city;
    ELEMENTHTML.sloganMember.textContent = objPhotographer[key].tagline;
    for (let index in ELEMENTHTML.tagsMember) {
      ELEMENTHTML.tagsMember[index].textContent = objPhotographer[key].tags[index];
    }
  };

  const sortJson = (id) => objMedia.filter((item) => item.photographerId == id);

  const array = [];

  const utilData = (member, photographerName) => {
    const noVideo = member.filter((item) => item.image != undefined);
    noVideo.forEach((item) => {
      array.push({
        title: item.title,
        date: item.date,
        likes: item.likes,
        description : item.description,
        image: "ressources/" +photographerName+"/" + item.image
      });
    });
  };
  const onlyPicture = (arr) => arr.map((item) => item.image);

  const showPicture = (arr) => {
    for (let key in arr) {
      ELEMENTHTML.allPicturePhotographer[key].setAttribute("src", arr[key].image);
      ELEMENTHTML.allPicturePhotographer[key].setAttribute("aria-label", arr[key].description)
      ELEMENTHTML.legend[key].innerHTML += arr[key].title + arr[key].likes;
    }
  };
  
  const showVideo = (photographerName,arr) => {
    const onlyVideo =arr.filter(item => item.video)
    onlyVideo.push({description : onlyVideo[0].description})
    ELEMENTHTML.video.setAttribute("src","ressources/"+photographerName+"/"+onlyVideo[0].video)
    ELEMENTHTML.video.setAttribute("aria-label", onlyVideo[1].description)
  }
  

  const sortPicture = () => {
    if (ELEMENTFORM.select.value === "popularite") {
      array.sort((a, b) => a.likes - b.likes);
      showPicture(array);
    } else if (ELEMENTFORM.select.value === "date") {
      array.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      showPicture(array);
    } else if (ELEMENTFORM.select.value === "titre") {
      array.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title == b.title) {
          return 0;
        } else {
          return +1;
        }
      });
      showPicture(array);
    }
  };

  ELEMENTFORM.select.addEventListener("click", sortPicture);

  const likePicture = (member) =>
    member.map((item, key) => {
      let numberLike = item.likes;
      ELEMENTHTML.like[key].innerHTML = Number(numberLike);
      const moreLike = () => {
        return (ELEMENTHTML.like[key].innerHTML = Number(numberLike++));
      };

      ELEMENTHTML.like.forEach((el) => el.addEventListener("click", moreLike));
    });

  if (ELEMENTHTML.title.innerHTML == "Mimi Keel | FishEye") {
    dataProfil(0);
    const mimi = sortJson(243);
    utilData(mimi, "Mimi");
    const mimiPicture = onlyPicture(array);
    showPicture(array);
    likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(mimiPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(mimiPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(mimiPicture));
    showVideo("Mimi",mimi);
  }

  if (ELEMENTHTML.title.innerHTML == "Ellie-Rose Wilkens | FishEye") {
    dataProfil(1);
    const ellie = sortJson(930);
    utilData(ellie, "Ellie_Rose");
    const elliePicture = onlyPicture(array);
    showPicture(array);
    likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(elliePicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(elliePicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(elliePicture));
    showVideo("Ellie_Rose", ellie)
    
  }

  if (ELEMENTHTML.title.innerHTML == "Tracy Galindo | FishEye") {
    const tracy = sortJson(82);
    dataProfil(2);
    utilData(tracy, "Tracy");
    const tracyPicture = onlyPicture(array);
    showPicture(array);
    likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(tracyPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(tracyPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(tracyPicture));
    showVideo("Tracy", tracy)
  }

  if (ELEMENTHTML.title.innerHTML == "Nabeel Bradford | FishEye") {
    dataProfil(3);
    const nabeel = sortJson(527);
    utilData(nabeel, "Nabeel");
    const nabeelPicture = onlyPicture(array);
    showPicture(array);
    likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(nabeelPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(nabeelPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(nabeelPicture));
    showVideo("Nabeel", nabeel)
  }

  if (ELEMENTHTML.title.innerHTML == "Rhode Dubois | FishEye") {
    dataProfil(4);
    const rhode = sortJson(925);
    utilData(rhode, "Rhode");
    const rhodePicture = onlyPicture(array);
    showPicture(array);
    likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(rhodePicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(rhodePicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(rhodePicture));
    showVideo("Rhode", rhode)
  }

  if (ELEMENTHTML.title.innerHTML == "Marcel Nikolic | FishEye") {
    dataProfil(5);
    const marcel = sortJson(195);
    utilData(marcel, "Marcel");
    const marcelPicture = onlyPicture(array);
    showPicture(array);
    likePicture(array);
    ELEMENTBTN.btnPrevious.addEventListener("click", () => previousPicture(marcelPicture));
    ELEMENTBTN.btnNext.addEventListener("click", () => nextPicture(marcelPicture));
    document.addEventListener("keydown", (event) => keyboardLightbox(marcelPicture));
    showVideo("Marcel", marcel)
  }
};