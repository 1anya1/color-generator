const slide = document.createElement("div");
slide.id = "slider";
const html = `<div>
    <a class="h3 nav-links" href="#random"><button class='btn btn-secondary btn-lg'>New Palette</button></a>
    <a  class="h3 nav-links"href="#example"><button class='btn btn-secondary btn-lg'>Demo</button></a>
    <a  class="h3 nav-links"href="#cta"><button class='btn btn-secondary btn-lg'>Get Palette</button></a>
  </div>`;
slide.innerHTML = html;

document.body.prepend(slide);

export default slide;
