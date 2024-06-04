// toggle theme

let darkMode = true;

const toggleTheme = () => {
  darkMode = !darkMode;
  updateTheme();
};

const updateTheme = () => {
  const body = document.getElementById("body");
  const topSection = document.getElementById("top-section");
  const bottomSection = document.getElementById("bottom-section");
  if (darkMode) {
    body.classList.add("body__dark");
    body.classList.remove("body__light");

    topSection.classList.add("body__top-section--dark");
    topSection.classList.remove("body__top-section--light");
    bottomSection.classList.add("body__bottom-section--dark");
    bottomSection.classList.remove("body__bottom-section--light");
  } else {
    body.classList.add("body__light");
    body.classList.remove("body__dark");

    topSection.classList.add("body__top-section--light");
    topSection.classList.remove("body__top-section--dark");
    bottomSection.classList.add("body__bottom-section--light");
    bottomSection.classList.remove("body__bottom-section--dark");
  }
};

document.getElementById("toggle-button").addEventListener("click", toggleTheme);
updateTheme();

// toggle menu-pop-up

let showMenuBar = false;

const toggleMenuBar = () => {
  showMenuBar = !showMenuBar;
  let popUpMenu = document.getElementById("menu-pop-up");
  let darkWrapper = document.getElementById("dark-wrapper");
  if (showMenuBar) {
    popUpMenu.classList.add("item-display");
    popUpMenu.classList.remove("item-display--none");
    darkWrapper.classList.add("item-display");
    darkWrapper.classList.remove("item-display--none");
  } else {
    popUpMenu.classList.remove("item-display");
    popUpMenu.classList.add("item-display--none");
    darkWrapper.classList.remove("item-display");
    darkWrapper.classList.add("item-display--none");
  }
};

document.getElementById("menu-button").addEventListener("click", toggleMenuBar);

addEventListener("resize", () => {
  let popUpMenu = document.getElementById("menu-pop-up");
  let darkWrapper = document.getElementById("dark-wrapper");
  if (innerWidth > 1024) {
    showMenuBar = false;
    popUpMenu.classList.remove("item-display");
    popUpMenu.classList.add("item-display--none");
    darkWrapper.classList.remove("item-display");
    darkWrapper.classList.add("item-display--none");
  }
});

document
  .getElementById("dark-wrapper")
  .addEventListener("click", toggleMenuBar);

document.getElementById("menu-pop-up").addEventListener("click", toggleMenuBar);
