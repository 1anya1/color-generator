function createPallete() {
  const colorPallete = document.getElementById("pallete");
  for (let i = 0; i < 4; i++) {
    const el = document.createElement("div");
    el.classList = "col box";
    console.log(el);
    const html = `
    <div class="colorBox" id="id${i}"></div>
    <button type="button" class="btn btn-primary color">
      Change Color
    </button>
    <button type="button" class="btn btn-primary">Lock Color</button>
    `;
    el.innerHTML = html;
    colorPallete.appendChild(el);
  }
}
createPallete();
const pallete = document.getElementsByClassName("box");
[...pallete].forEach((el) => {
  el.addEventListener("click", changeColor);
});

const random = document.getElementById("random");
function changeHeading() {
  const header = document.getElementById("header");
  header.style.color = document.getElementById("id0").style.backgroundColor;
  console.log(document.getElementById("one").style.backgroundColor);
}

function colorGenerate(el) {
  return Math.floor(Math.random() * el);
}
function changeColor(e) {
  let button = e.target.className;
  if (button.indexOf("color") !== -1) {
    const target = e.target.parentElement.children[0];
    target.style.backgroundColor = `rgb(${colorGenerate(225)}, ${colorGenerate(
      225
    )}, ${colorGenerate(225)})`;
  }
}
function randomColorPalletCreation() {
  let boxes = document.getElementsByClassName("colorBox");
  [...boxes].forEach((box) => {
    box.style.backgroundColor = `rgb(${colorGenerate(225)}, ${colorGenerate(
      225
    )}, ${colorGenerate(225)})`;
  });
  changeHeading();
}
random.addEventListener("click", randomColorPalletCreation);

randomColorPalletCreation();
