//dynamic creation of pallete of 4 colors
const elementNames = ["Nav Bar", "Heading", "Button", "Hero"];
function createPallete() {
  const colorPallete = document.getElementById("pallete");
  for (let i = 0; i < 4; i++) {
    const el = document.createElement("div");
    el.classList = "col box";
    const html = `
      <p class='lead'>${elementNames[i]}</p>
      <div class="colorBox" id="id${i}">  
      <p class="h6">color</p>
      </div>
      <button type="button" class="btn btn-primary color ">
        Change Color
      </button>
      `;
    el.innerHTML = html;
    colorPallete.appendChild(el);
  }
}
createPallete();

export default createPallete;
