import img from "./image.js";
const exampleTemplate = document.createElement("div");
exampleTemplate.id = "example";
const html = `
<div class="example">
  <nav class="navbar navbar-expand-lg bg">
    <a class="navbar-brand" id="brand" href="#">LOGO</a>
    <div class="container-fluid">

      <div class="mobile">
        <div class="long mobile-nav"></div>
        <div class="short mobile-nav"></div>
        <div class="long mobile-nav"></div>
      </div>
    </div>
  </nav>
  <div class="row rowExample">
    <div class="side-menu">
      <div class="loc">
        <div id="active" class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="header col-sm-6">
      <h1 id="header" class="display-2">Heading Text</h1>
      <h5>This is my subtext. This will be your regular text color</h5>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        id="buttonExample"
      >
        Learn More
      </button>
    </div>
    <div id="exampleSplash" class="col-sm-6">
      <div id="imageExample">${img}</div>
    </div>
  </div>
</div>
`;
exampleTemplate.innerHTML = html;

export default exampleTemplate;
