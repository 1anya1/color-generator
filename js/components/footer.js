import svg from "./social.js";

const footer = document.createElement("footer");

const info = document.createElement("p");
info.innerText = "Created by Anna Filatova";
info.append(svg);
footer.append(info);

export default footer;
