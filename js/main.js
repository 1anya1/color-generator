import createPallete from "./createPallete.js";
import img from "./image.js";
//constants
const random = document.getElementById("random");

//color generation
function colorGenerate(el) {
  return Math.floor(Math.random() * el);
}

//dependencies on color pallet dynamic website layout
function changeHeading() {
  const header = document.getElementById("header");
  header.style.color = document.getElementById("id0").style.backgroundColor;
}
function firstLi() {
  const li = document.getElementById("active");
  console.log(li);
  li.style.color = document.getElementById("id3").style.backgroundColor;
  const svg = document.getElementById("svg").children[0];
  svg.style.fill = document.getElementById("id2").style.backgroundColor;
}
function buttonExample() {
  const button = document.getElementById("buttonExample");
  button.style.backgroundColor =
    document.getElementById("id3").style.backgroundColor;
}

function changeColor(e) {
  let button = e.target.className;
  const color = `rgb(${colorGenerate(225)}, ${colorGenerate(
    225
  )}, ${colorGenerate(225)})`;
  if (button.indexOf("color") !== -1) {
    const target = e.target.parentElement.children[0];
    target.children[0].innerText = color;
    target.style.backgroundColor = color;
  }
  changeHeading();
  firstLi();
  buttonExample();
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
  changeHeading();
  firstLi();
  buttonExample();
}

//event handlers on click
const pallete = document.getElementsByClassName("box");
[...pallete].forEach((el) => {
  el.addEventListener("click", changeColor);
});

random.addEventListener("click", randomColorPalletCreation);

randomColorPalletCreation();
