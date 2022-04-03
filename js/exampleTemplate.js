const exampleTemplate = document.createElement("div");
const html = `
<div class="example">
  <nav class="navbar navbar-expand-lg bg">
    <a class="navbar-brand" id="brand" href="#">MyBrand</a>
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"
            >About</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"
            >Gallery</a
          >
        </li>
      </ul>
      <div class="mobile">
        <div class="long mobile-nav"></div>
        <div class="short mobile-nav"></div>
        <div class="long mobile-nav"></div>
      </div>
    </div>
  </nav>
  <div class="row">
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
      <div id="imageExample"></div>
    </div>
  </div>
</div>
`;
exampleTemplate.innerHTML = html;

export default exampleTemplate;
