const toggle = (element) => element.classList.toggle("open");

// dropdown
const languageBtn = document.getElementById("dropdown");
const dropdownContent = document.getElementById("dropdown-content");

languageBtn.addEventListener("click", () => toggle(dropdownContent));

// product slideshow
const slideshowFullSizeImg = document.querySelector("#slideshow-fullsize");
const slideshowImgs = document.querySelectorAll(".slideshow__thumbnail");

slideshowImgs.forEach((slideshowImg) => {
  slideshowImg.addEventListener("click", (e) => {
    slideshowImgs.forEach((slideshowImg) => (slideshowImg.style.border = "none"));

    const currentElement = e.currentTarget;

    if (currentElement) {
      slideshowFullSizeImg.src = currentElement.src;
      slideshowFullSizeImg.alt = currentElement.alt;
      currentElement.style.border = "4px solid #d0c4a6";
    }
  });
});
// product slideshow

// search
const searchDiv = document.querySelector("#search");
const searchIcon = document.querySelector("#search-icon");
const searchCloseIcon = document.querySelector("#search-close-icon");

// favorite
const myFavoriteListItem = document.querySelector("#my-favorite");
const favoriteSidebarAside = document.querySelector("#favorite-sidebar");
const favoriteSidebarCloseIcon = document.querySelector("#favorite-sidebar-close");

// shopping cart
const shoppingCartListItem = document.querySelector("#shopping-card");
const sidebarAside = document.querySelector("#sidebar");
const sidebarCloseIcon = document.querySelector("#sidebar-close");

// search
searchIcon.addEventListener("click", () => toggle(searchDiv));
searchCloseIcon.addEventListener("click", () => toggle(searchDiv));

// favorite
myFavoriteListItem.addEventListener("click", () => toggle(favoriteSidebarAside));
favoriteSidebarCloseIcon.addEventListener("click", () => toggle(favoriteSidebarAside));

// shoppingcart
shoppingCartListItem.addEventListener("click", () => toggle(sidebarAside));
sidebarCloseIcon.addEventListener("click", () => toggle(sidebarAside));
