let prnt = document.getElementById("cta");
let callCTA = document.getElementById("callCTA");
function getColors() {
  let colors = assignValues();
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
  if (!callCTA.classList.contains("open")) {
    const id = ["id0", "id1", "id2", "id3"];
    const myColors = [];
    for (let i = 0; i < 4; i++) {
      let el = document.getElementById(id[i]).style.backgroundColor;
      myColors.push(el);
    }
    return myColors;
  }
  return null;
}

export default getColors;
