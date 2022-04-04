const ctaTemplate = document.createElement("div");
ctaTemplate.id = "cta";
const html = `
    <p class='display-3'>Get Palette </p>
    <p class='lead container-md'>HuePal allows you to generate a color palette randomly and dynamically see how the colors come together in a demo.</br> </br>

    If you love the color palette, click the button below to save the colors in RGB format. </p>
    <button type="button" class="btn btn-primary btn-lg" id="callCTA">
  Get Colors
</button>
    `;
ctaTemplate.innerHTML = html;

export default ctaTemplate;
