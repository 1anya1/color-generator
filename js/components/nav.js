const nav = document.createElement("nav");
nav.className.padEnd("navbar");
const html = `
<div class="container-fluid">
    <img src="../../svg/logo2.svg" alt=""  class="d-inline-block align-text-top">
  <div id='hamburger'>
  <div class="bar bar-one"></div>
  <div class="bar bar-two"></div>
  <div class="bar bar-three"></div>
    
  </div>
</div>`;
nav.innerHTML = html;

export default nav;
