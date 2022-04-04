const slide = document.createElement("div");
slide.id = "slider";
const html = `<div>
    <a class="h3 nav-links" href="#random">Generate New Palette </a>
    <a  class="h3 nav-links"href="#example">MockUp Page</a>
    <a  class="h3 nav-links"href="#cta">Get Palette</a>
  </div>`;
slide.innerHTML = html;

document.body.prepend(slide);

export default slide;
