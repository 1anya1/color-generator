import footer from "./components/footer.js";
import nav from "./components/nav.js";
import headerTemplate from "./components/headerTemplate.js";
import colorPalleteTemplate from "./components/colorPalleteTemplate.js";
import exampleTemplate from "./components/exampleTemplate.js";
import ctaTemplate from "./components/ctaTemplate.js";

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
  let button = e.target.className;
  const color = `rgb(${colorGenerate(225)}, ${colorGenerate(
    225
  )}, ${colorGenerate(225)})`;
  if (button.indexOf("color") !== -1) {
    const target = e.target.parentElement.children[1];
    // target.children[0].innerText = color;
    target.style.backgroundColor = color;
  }
  updateExample();
}
function randomColorPalletCreation() {
  let boxes = document.getElementsByClassName("colorBox");
  [...boxes].forEach((box) => {
    const color = `rgb(${colorGenerate(225)}, ${colorGenerate(
      225
    )}, ${colorGenerate(225)})`;
    box.style.backgroundColor = color;
    box.children[0].innerText = color;
  });
  updateExample();
}
let prnt = document.getElementById("cta");

function getColors() {
  if (!callCTA.classList.contains("open")) {
    let colors = assignValues();
    let div = document.createElement("TEXTAREA");
    div.rows = 5;
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
  const names = ["NavBar: ", "Heading: ", "Button: ", "Hero: "];
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
    callCTA.innerText = "Reset";
  } else {
    callCTA.innerText = "Get Colors";
    elem.remove();
  }
}
//event handlers on click
const pallete = document.getElementsByClassName("box");
[...pallete].forEach((el) => {
  el.addEventListener("click", changeColor);
});

random.addEventListener("click", randomColorPalletCreation);
callCTA.addEventListener("click", getColors);
callCTA.addEventListener("click", generateColorList);

randomColorPalletCreation();
