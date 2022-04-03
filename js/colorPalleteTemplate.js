const colorPalleteTemplate = document.createElement("div");
colorPalleteTemplate.classList.add("container");
colorPalleteTemplate.id = "colorPallete";

const html = `
<div class="row row-cols" id="pallete"></div>
`;
colorPalleteTemplate.innerHTML = html;

export default colorPalleteTemplate;
