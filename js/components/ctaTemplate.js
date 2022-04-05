const ctaTemplate = document.createElement("div");
ctaTemplate.id = "cta";
const html = `
    <p class='display-3'>Save Palette</p>
    <p class='lead container-md'>

    If you love the color palette, click the button below to save the colors in RGB format. </p>
    <button type="button" class="btn btn-primary btn-lg" id="callCTA">
  Get Colors
</button>
    `;
ctaTemplate.innerHTML = html;

export default ctaTemplate;
