const svg = document.createElement("div");
const images = ["websiteLink.svg", "gitHub.svg", "linkedIn.svg"];
const url = [
  "https://anyacodes.com/",
  "https://github.com/1anya1",
  "https://www.linkedin.com/in/anna-filatova/",
];
svg.classList.add("links");
for (let i = 0; i < 3; i++) {
  const link = document.createElement("a");
  link.href = url[i];
  const img = document.createElement("img");
  img.src = `../svg/${images[i]}`;
  link.append(img);
  svg.append(link);
}

export default svg;
