console.log("hello world");

let darkMode = true;

const toggleTheme = () => {
  darkMode = !darkMode;
  console.log("Dark mode is: ", darkMode);
  updateTheme();
};

const updateTheme = () => {
  const topSection = document.getElementById("top-section");
  const bottomSection = document.getElementById("bottom-section");
  const toggleButton = document.getElementById("toggle-button-1");
  const input = document.getElementById("search-input");
  if (darkMode) {
    topSection.classList.add("top-section--dark");
    topSection.classList.remove("top-section--light");
    bottomSection.classList.add("bottom-section--dark");
    bottomSection.classList.remove("bottom-section--light");
    toggleButton.classList.add("background--dark");
    toggleButton.classList.remove("background--light");
    input.classList.remove("input--shadow");
    input.classList.add("input--noshadow");
  } else {
    topSection.classList.add("top-section--light");
    topSection.classList.remove("top-section--dark");
    bottomSection.classList.add("bottom-section--light");
    bottomSection.classList.remove("bottom-section--dark");
    toggleButton.classList.add("background--light");
    toggleButton.classList.remove("background--dark");
    input.classList.add("input--shadow");
    input.classList.remove("input--noshadow");
  }

  switchIcons();
  switchToggleImage();
  switchMovedownButton();
  toggleMenuIcons();
  toggleProductBackground();
  // handleResize();
};

const switchToggleImage = () => {
  let moonImage = document.getElementById("moon-image");
  let sunImage = document.getElementById("sun-image");
  if (darkMode) {
    moonImage.classList.add("item-display");
    moonImage.classList.remove("item-display--none");
    sunImage.classList.add("item-display--none");
    sunImage.classList.remove("item-display");
  } else {
    moonImage.classList.add("item-display--none");
    moonImage.classList.remove("item-display");
    sunImage.classList.add("item-display");
    sunImage.classList.remove("item-display--none");
  }
};

const switchIcons = () => {
  let searchLight = document.getElementById("search-light");
  let searchDark = document.getElementById("search-dark");
  let cartLight = document.getElementById("cart-light");
  let cartDark = document.getElementById("cart-dark");

  if (darkMode) {
    if (innerWidth > 1024) {
      searchLight.classList.add("item-display");
      searchLight.classList.remove("item-display--none");
      searchDark.classList.add("item-display--none");
      searchDark.classList.remove("item-display");
    }

    cartLight.classList.add("item-display");
    cartLight.classList.remove("item-display--none");
    cartDark.classList.add("item-display--none");
    cartDark.classList.remove("item-display");
  } else {
    if (innerWidth > 1024) {
      searchLight.classList.add("item-display--none");
      searchLight.classList.remove("item-display");
      searchDark.classList.add("item-display");
      searchDark.classList.remove("item-display--none");
    }

    cartLight.classList.add("item-display--none");
    cartLight.classList.remove("item-display");
    cartDark.classList.add("item-display");
    cartDark.classList.remove("item-display--none");
  }
};

const switchMovedownButton = () => {
  let lightArrow = document.getElementById("light-arrow");
  let darkArrow = document.getElementById("dark-arrow");
  let movedownbutton = document.getElementById("move-down-button");
  if (darkMode) {
    movedownbutton.classList.add("border--light");
    movedownbutton.classList.remove("border--dark");
    lightArrow.classList.add("item-display");
    lightArrow.classList.remove("item-display--none");
    darkArrow.classList.add("item-display--none");
    darkArrow.classList.remove("item-display");
  } else {
    movedownbutton.classList.remove("border--light");
    movedownbutton.classList.add("border--dark");
    lightArrow.classList.add("item-display--none");
    lightArrow.classList.remove("item-display");
    darkArrow.classList.add("item-display");
    darkArrow.classList.remove("item-display--none");
  }
};

const toggleMenuIcons = () => {
  let darkMenu = document.getElementById("dark-menu");
  let lightMenu = document.getElementById("light-menu");
  if (darkMode) {
    lightMenu.classList.add("item-display");
    lightMenu.classList.remove("item-display--none");
    darkMenu.classList.remove("item-display");
    darkMenu.classList.add("item-display--none");
  } else {
    lightMenu.classList.remove("item-display");
    lightMenu.classList.add("item-display--none");
    darkMenu.classList.add("item-display");
    darkMenu.classList.remove("item-display--none");
  }
};

const toggleProductBackground = () => {
  let products = document.querySelectorAll(".product");

  products.forEach((product) => {
    if (darkMode) {
      product.classList.remove("product--dark-back");
      product.classList.add("product--light-back");
    } else {
      product.classList.add("product--dark-back");
      product.classList.remove("product--light-back");
    }
  });
};

document.getElementById("toggle-button").addEventListener("click", toggleTheme);
updateTheme();
switchIcons();
switchToggleImage();
switchMovedownButton();
toggleMenuIcons();
toggleProductBackground();

// resize window event listener

const handleResize = () => {
  console.log("handle resize");
  let searchLight = document.getElementById("search-light");
  let searchDark = document.getElementById("search-dark");
  if (innerWidth > 1024) {
    if (darkMode) {
      searchDark.classList.remove("item-display");
      searchDark.classList.add("item-display--none");
      searchLight.classList.remove("item-display--none");
      searchLight.classList.add("item-display");
    } else {
      searchDark.classList.remove("item-display--none");
      searchDark.classList.add("item-display");
      searchLight.classList.remove("item-display");
      searchLight.classList.add("item-display--none");
    }
  } else {
    searchDark.classList.add("item-display--none");
    searchDark.classList.remove("item-display");
    searchLight.classList.remove("item-display");
    searchLight.classList.add("item-display--none");
  }
};

window.addEventListener("resize", handleResize);
