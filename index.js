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

// scroll to bottom section

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

document.getElementById("move-down-button").addEventListener("click", () => {
  scrollToSection("bottom-section");
});



const updateTimer = () => {
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");

  var hours = parseInt(hoursElement.innerHTML);
  var minutes = parseInt(minutesElement.innerHTML);
  var seconds = parseInt(secondsElement.innerHTML);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;

    if (minutes < 0) {
      minutes = 59;
      hours--;

      if (hours < 0) {
        clearInterval(timerInterval);
      }
    }
  }

  hoursElement.innerHTML = pad(hours);
  minutesElement.innerHTML = pad(minutes);
  secondsElement.innerHTML = pad(seconds);
};

const pad = (num) => {
  return num < 10 ? "0" + num : num;
};

var timerInterval = setInterval(updateTimer, 1000);
