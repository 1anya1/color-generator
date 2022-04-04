const colorPalleteTemplate = document.createElement("div");

colorPalleteTemplate.id = "colorPallete";
const pallete = document.createElement("div");
pallete.id = "pallete";
pallete.classList.add("grid");
colorPalleteTemplate.append(pallete);

const elementNames = ["Nav Bar", "Heading Text", "Button", "Hero Image"];
function createPallete() {
  for (let i = 0; i < 4; i++) {
    const el = document.createElement("div");
    el.classList.add("g-col-6", "g-col-lg-3", "box");
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
    pallete.append(el);
  }
}
createPallete();

export default colorPalleteTemplate;
