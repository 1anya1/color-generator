import createPallete from "./createPallete.js";
import img from "./image.js";
import getColors from "./getColors.js";

//constants
const random = document.getElementById("random");
const cta = document.getElementById("cta");
const callCTA = document.getElementById("callCTA");

//color generation
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
  console.log(button);
  const color = `rgb(${colorGenerate(225)}, ${colorGenerate(
    225
  )}, ${colorGenerate(225)})`;
  if (button.indexOf("color") !== -1) {
    const target = e.target.parentElement.children[1];
    console.log(target);
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

//event handlers on click
const pallete = document.getElementsByClassName("box");
[...pallete].forEach((el) => {
  el.addEventListener("click", changeColor);
});

random.addEventListener("click", randomColorPalletCreation);
cta.addEventListener("click", getColors);
cta.addEventListener("click", function () {
  callCTA.classList.toggle("open");
  const elem = document.getElementById("cta-container");
  if (callCTA.classList.contains("open")) {
    callCTA.innerText = "Reset";
    console.log(elem);
  } else {
    callCTA.innerText = "Get Colors";
    elem.remove();
  }
});

randomColorPalletCreation();
