const root = document.getElementById("root");
const headerTemplate = document.createElement("div");

const html = `<div class="banner">
    <h1 class="display-3">Random Color Generator</h1>
    <button type="button" class="btn btn-primary btn-lg" id="random">
      Generate New Random Pallete
    </button>
  </div>`;
headerTemplate.innerHTML = html;
export default headerTemplate;
