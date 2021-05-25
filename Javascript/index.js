import { ELEMENTHTML } from "./constant.js";
let photographers;

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    const photographers = data.photographers;
    ELEMENTHTML.namePhotographer.forEach((item, key) => {
      item.textContent = photographers[key].name;
    });
    ELEMENTHTML.country.forEach((item, key) => {
      item.textContent = photographers[key].city + ", " + photographers[key].country;
    });
    ELEMENTHTML.slogan.forEach((item, key) => {
      item.textContent = photographers[key].tagline;
    });
    ELEMENTHTML.namePhotographer.forEach((item, key) => {
      item.textContent = photographers[key].name;
    });
    ELEMENTHTML.price.forEach((item, key) => {
      item.textContent = photographers[key].price + "/jour";
    });
    
  });
