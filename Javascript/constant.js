export const ELEMENTHTML = {
    title : document.querySelector("head title"),
    worker : [...document.querySelectorAll(".photographer")],
    tagNavigation : [...document.querySelectorAll(".index_nav a")],
    namePhotographer : [...document.querySelectorAll(".name_photographer")],
    country : [...document.querySelectorAll(".moreinfo__country")],
    slogan : [...document.querySelectorAll(".moreinfo__slogan")],
    price : [...document.querySelectorAll(".moreinfo__price")],
    tags : [...document.querySelectorAll(".tag")],
    mainPageElement : document.querySelector(".pages-main"),
    allPicturePhotographer :[...document.querySelectorAll(".picture img")],
    photo : document.querySelector('.photo'),
    nameMember : document.querySelector(".profil_photographer__name"),
    localisationMember : document.querySelector(".info_photographer__country"), 
    sloganMember : document.querySelector(".info_photographer__slogan"),
    tagsMember : [...document.querySelectorAll(".tagofphotographer")]
}

export const ELEMENTMODAL = {
    modal : document.querySelector(".modal_contact"),
    lightBox : document.querySelector(".lightbox"),
}

export const ELEMENTFORM = {
    formContact : document.querySelector(".forms_photographer"),
    input : [...document.querySelectorAll("input")],
    message : document.querySelector("textarea"),
    boxData : [...document.querySelectorAll(".formData")],

}

export const ELEMENTBTN = {
    btnContact : document.querySelector(".contact_photographer"),
    btnCloseModal : document.querySelector(".close_modal"),
    btnOpenLightbox : document.querySelector(".open_lightbox"),
    btnCloseLightbox : document.querySelector(".close_lightbox"),
    btnPrevious : document.querySelector(".previous"),
    btnNext : document.querySelector(".next"),
    
}

export const GETMSG = {
    0 : { msg : "Ce champs est obligatoire et doit contenir 2 caractères minimum"},
    1: { msg : "Ce champs est obligatoire et doit contenir 20 caractères minimum"},
    2 : { msg : "Succès de l'envoi de votre message"}
}

