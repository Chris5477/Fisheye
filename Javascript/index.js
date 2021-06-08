import { ELEMENTHTML } from "./constant.js";
import { showAllTags } from "./function.js";

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
      item.textContent = photographers[key].price + "€/jour";
    });
    const array = [];

    photographers.map((item) => array.push(item.tags));
    const arrayTags = array.flat();

    for (const val in arrayTags) {
      ELEMENTHTML.tags[val].textContent = `#${arrayTags[val]}`;
    }
    
    ELEMENTHTML.tagNavigation.forEach((el) =>
      el.addEventListener("click", () => {
        const element = el.innerHTML.substring(1).toLowerCase();
        for (let index in array) {
          ELEMENTHTML.worker[index].style.display = "initial";
          ELEMENTHTML.allTags.classList.remove("hiddenElement")
          ELEMENTHTML.allTags.addEventListener("click", showAllTags)
          !array[index].includes(element) ? ELEMENTHTML.worker[index].style.display = "none" : "";
        }
      })
    );
  });