import footer from "./components/footer.js";
import nav from "./components/nav.js";
import headerTemplate from "./components/headerTemplate.js";
import colorPalleteTemplate from "./components/colorPalleteTemplate.js";
import exampleTemplate from "./components/exampleTemplate.js";
import ctaTemplate from "./components/ctaTemplate.js";
import slide from "./components/slide.js";
import solidLock from "./svg/solidLock.js";
import solidUnlock from "./svg/solidUnlock.js";

const root = document.getElementById("root");
root.append(nav);
root.append(headerTemplate);
root.append(colorPalleteTemplate);
root.append(exampleTemplate);
root.append(ctaTemplate);
root.append(footer);

//constants
const random = document.getElementById("random");
const callCTA = document.getElementById("callCTA");
const hamburger = document.getElementById("hamburger");

function colorGenerate(el) {
  return Math.floor(Math.random() * el);
}

//dependencies on color pallet dynamic website layout
function updateExample() {
  //all the elements to change
  const header = document.getElementById("header");
  const dot = document.getElementById("active");
  const svg = document.getElementById("svg").children[0];
  const button = document.getElementById("buttonExample");
  const hamburger = document.getElementsByClassName("mobile-nav");
  const brand = document.getElementById("brand");

  //what color they take on
  header.style.color = document.getElementById("id1").style.backgroundColor;
  svg.style.fill = document.getElementById("id3").style.backgroundColor;
  dot.style.backgroundColor =
    document.getElementById("id2").style.backgroundColor;
  brand.style.color = document.getElementById("id0").style.backgroundColor;
  button.style.backgroundColor =
    document.getElementById("id2").style.backgroundColor;
  [...hamburger].forEach((el) => {
    el.style.backgroundColor =
      document.getElementById("id0").style.backgroundColor;
  });
}

function changeColor(e) {
  let parent = e.target.parentElement.children[1];
  if (!parent.classList.contains("locked")) {
    const color = `rgb(${colorGenerate(225)}, ${colorGenerate(
      225
    )}, ${colorGenerate(225)})`;
    let val = e.target.parentElement.children[3];

    const target = e.target.parentElement.children[1];
    target.children[0].innerText = color;
    target.style.backgroundColor = color;
  }
  updateExample();
}

// Lock Unlock Functionality For the Palette
function lock(e) {
  lockScreen(e);
  // lockButton(e);
}
function lockScreen(e) {
  console.log(e);
  e.path[2].children[2].classList.toggle("locked");
  e.path[1].classList.toggle("locked");
  e.path[0].classList.toggle("locked");

  e.path[0].classList.contains("locked")
    ? (e.path[0].innerHTML = solidUnlock)
    : (e.path[0].innerHTML = solidLock);
}

function randomColorPalletCreation() {
  let boxes = document.getElementsByClassName("colorBox");
  [...boxes].forEach((box) => {
    if (!box.classList.contains("locked")) {
      const color = `rgb(${colorGenerate(225)}, ${colorGenerate(
        225
      )}, ${colorGenerate(225)})`;
      box.style.backgroundColor = color;
      box.children[0].innerText = color;
    }
  });
  updateExample();
}
let prnt = document.getElementById("cta");

function getColors() {
  if (!callCTA.classList.contains("open")) {
    let colors = assignValues();
    let div = document.createElement("TEXTAREA");
    div.rows = 4;
    div.classList.add("container-sm");
    div.id = "cta-container";
    colors.forEach((el) => {
      div.value += el + "\r\n";
    });
    prnt.append(div);
  }
}
function assignValues() {
  const id = ["id0", "id1", "id2", "id3"];
  const names = ["Nav Bar: ", "Heading Text: ", "Button: ", "Hero Image: "];
  const myColors = [];
  for (let i = 0; i < 4; i++) {
    let el = document.getElementById(id[i]).style.backgroundColor;
    myColors.push(names[i] + el);
  }
  return myColors;
}
function generateColorList() {
  callCTA.classList.toggle("open");
  const elem = document.getElementById("cta-container");
  if (callCTA.classList.contains("open")) {
    callCTA.innerText = "Close";
  } else {
    callCTA.innerText = "Get Colors";
    elem.remove();
  }
}

function toggleMenu() {
  hamburger.classList.toggle("open");
  slide.classList.toggle("open");
  root.classList.toggle("navView");
  document.body.classList.toggle("open");
}
//event handlers on click
const pallete = document.getElementsByClassName("color");
[...pallete].forEach((el) => {
  el.addEventListener("click", changeColor);
});

const lockColor = document.getElementsByClassName("lockSVG");
[...lockColor].forEach((el) => {
  el.addEventListener("click", lock);
  el.addEventListener("touchstart", () => {});
  el.addEventListener("touchend", () => {});
  el.addEventListener("touchcancel", () => {});
  el.addEventListener("touchmove", () => {});
});

const links = document.getElementsByClassName("nav-links");
[...links].forEach((el) => {
  el.addEventListener("click", toggleMenu);
});

random.addEventListener("click", randomColorPalletCreation);
callCTA.addEventListener("click", getColors);
callCTA.addEventListener("click", generateColorList);
hamburger.addEventListener("click", toggleMenu);

randomColorPalletCreation();
