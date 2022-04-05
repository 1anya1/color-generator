import svg from "./social.js";
import logo from "./logo.js";
const slide = document.createElement("div");
slide.id = "slider";
const html = `<div>
    <a class="h3 nav-links" href="#random"><button class='btn btn-secondary btn-lg'>Generate Palette</button></a>
    <a  class="h3 nav-links"href="#example"><button class='btn btn-secondary btn-lg'>Preview</button></a>
    <a  class="h3 nav-links"href="#cta"><button class='btn btn-secondary btn-lg'>Save Palette</button></a>
  </div>`;
slide.innerHTML = html;
const div = document.createElement("div");
div.className = "logo";
div.innerHTML = logo;
slide.prepend(div);
slide.append(svg);
document.body.prepend(slide);

export default slide;
