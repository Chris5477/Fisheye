export const ELEMENTHTML = {
    tagNavigation : [...document.querySelectorAll(".index_nav a")],
    namePhotographer : [...document.querySelectorAll(".name_photographer")],
    box : document.querySelector(".photographer__tag"),
    country : [...document.querySelectorAll(".moreinfo__country")],
    slogan : [...document.querySelectorAll(".moreinfo__slogan")],
    price : [...document.querySelectorAll(".moreinfo__price")],
    tags : [...document.querySelectorAll(".tag")],
    btnContact : document.querySelector(".contact_photographer"),
    modal : document.querySelector(".modal_contact"),
    btnCloseModal : document.querySelector(".close_modal"),
    mainPageElement : document.querySelector(".pages-main"),
    bigPicture :[...document.querySelectorAll(".picture img")],
    photo : document.querySelector('.photo'),
    lightBox : document.querySelector(".lightbox"),
    btnOpenLightbox : document.querySelector(".open_lightbox"),
    btnCloseLightbox : document.querySelector(".close_lightbox"),
    btnPrevious : document.querySelector(".previous"),
    btnNext : document.querySelector(".next"),
    formContact : document.querySelector(".forms_photographer"),
    input : [...document.querySelectorAll("input")],
    message : document.querySelector("textarea"),
    boxData : [...document.querySelectorAll(".formData")]
}

export const getMsg = {
    0 : { msg : "Ce champs est obligatoire et doit contenir 2 caractères minimum"},
    1: { msg : "Ce champs est obligatoire et doit contenir 20 caractères minimum"},
    2 : { msg : "Succès de l'envoi de votre message"}
}

