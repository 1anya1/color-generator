let prnt = document.getElementById("cta");
function getColors() {
  let colors = assignValues();
  console.log(colors);
  let div = document.createElement("div");
  div.classList.add("container-sm");
  div.id = "cta-container";
  colors.forEach((el) => {
    let p = document.createElement("p");
    p.innerText = el;
    div.append(p);
  });
  prnt.append(div);
}
function assignValues() {
  const id = ["id0", "id1", "id2", "id3"];
  const myColors = [];
  for (let i = 0; i < 4; i++) {
    let el = document.getElementById(id[i]).style.backgroundColor;
    myColors.push(el);
  }
  return myColors;
}

export default getColors;
