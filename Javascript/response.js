import { ELEMENTHTML } from "./constant.js";
export const responsePromise = (data) => {
  const objPhotographer = data.photographers;
  const objMedia = data.media;

  console.log(ELEMENTHTML.title)

  const dataProfil = (key) => {
    ELEMENTHTML.nameMember.textContent = objPhotographer[key].name
    ELEMENTHTML.localisationMember.textContent = objPhotographer[key].country + "," + objPhotographer[key].city
    ELEMENTHTML.sloganMember.textContent = objPhotographer[key].tagline
    for (let index in ELEMENTHTML.tagsMember){
    ELEMENTHTML.tagsMember[index].textContent = objPhotographer[key].tags[index]
    }
  }
  const sortJson = (id) => objMedia.filter((item) => item.photographerId == id);
  const array = [];
  const extractPicture = (member, firstName) => {
    for (let key in member) {
      array.push(member[key].image);
    }

    const arrayPicture = array.filter(item => item != undefined)
    
    return arrayPicture.map((item) => `../ressources/${firstName}/${item}`);
  };

  const dataPicture = (WorkMember) => ELEMENTHTML.allPicturePhotographer.forEach((item, key) => item.setAttribute("src", WorkMember[key]));

  if (ELEMENTHTML.title.innerHTML == "Mimi Keel | FishEye") {

    const mimi = sortJson(243);
    const mimiPicture = extractPicture(mimi, "Mimi");
    dataPicture(mimiPicture);
    dataProfil(0)
  }

  if (ELEMENTHTML.title.innerHTML == "Ellie-Rose Wilkens | FishEye") {
    const ellie = sortJson(930);
    const elliePicture = extractPicture(ellie, "Ellie_Rose");
    dataPicture(elliePicture);
    dataProfil(1)

  }

  if (ELEMENTHTML.title.innerHTML == "Tracy Galindo | FishEye") {
    const tracy = sortJson(82);
    const tracyPicture = extractPicture(tracy, "Tracy");
    dataPicture(tracyPicture);
    dataProfil(2)
  }

  if (ELEMENTHTML.title.innerHTML == "Nabeel Bradford | FishEye") {
    const nabeel = sortJson(527);
    const nabeelPicture = extractPicture(nabeel, "Nabeel");
    dataPicture(nabeelPicture);
    dataProfil(3)
  }

  if (ELEMENTHTML.title.innerHTML == "Rhode Dubois | FishEye") {
    const rhode = sortJson(925);
    const rhodePicture = extractPicture(rhode, "Rhode");
    dataPicture(rhodePicture);
    dataProfil(4)
  }

  if (ELEMENTHTML.title.innerHTML == "Marcel Nikolic | FishEye") {
    const marcel = sortJson(195);
    const marcelPicture = extractPicture(marcel, "Marcel");
    dataPicture(marcelPicture);
    dataProfil(5)
  }
};
