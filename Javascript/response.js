import { ELEMENTHTML } from "./constant.js"
export const responsePromise = (data) => {


    let i = 0;
    const mimi = data.media.filter((item) => item.photographerId == 243);
    mimi.splice(8,1)
    Object.keys(mimi);
    ELEMENTHTML.photo.setAttribute("src","ressources/Mimi/"+mimi[i].image)
    const nextPicture = () => {
        i++;  
        ELEMENTHTML.photo.setAttribute("src","ressources/Mimi/"+mimi[i].image);
    } 
    ELEMENTHTML.btnNext.addEventListener("click", nextPicture);
    
    
    const previousPicture = () => {
        i == 0 ? ELEMENTHTML.btnPrevious.setAttribute("disabled","true") : i--;
        ELEMENTHTML.photo.setAttribute("src","ressources/Mimi/"+mimi[i].image)
    }
    ELEMENTHTML.btnPrevious.addEventListener("click", previousPicture)
    
    
    const ellie = data.media.filter((item) => item.photographerId == 930);
    const tracy = data.media.filter((item) => item.photographerId == 82);
    const nabeel = data.media.filter((item) => item.photographerId == 527);
    const rhode = data.media.filter((item) => item.photographerId == 925);
    const marcel = data.media.filter((item) => item.photographerId == 195)
}
  