"use strict";

import { menu } from "./app.js";

const sectionItem = document.querySelector(".section-center");
const btns = document.querySelectorAll(".filter-btn");

let html = function (item) {
  return `<article class="menu-item">
  <img src=${item.img} alt=${item.title} class="photo" />
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
      ${item.desc}
    </p>
  </div>
</article>`;
};

// Loads content after page loads
window.addEventListener("load", () => {
  let displayMenu = menu.map((el) => {
    return html(el);
  });
  displayMenu = displayMenu.join("");
  //   console.log(displayMenu);
  sectionItem.innerHTML = displayMenu;
});

// Displays menu items prior to its category
btns.forEach((button) =>
  button.addEventListener("click", () => {
    let menuItem = menu.map((menuCat) => {
      if (button.dataset.id === menuCat.category) {
        return html(menuCat);
      }
      if (button.dataset.id === "all") {
        return html(menuCat);
      }
    });
    menuItem = menuItem.join("");
    sectionItem.innerHTML = menuItem;
    console.log(menuItem);
  })
);
