let prnt = document.getElementById("cta");
let callCTA = document.getElementById("callCTA");
function getColors() {
  if (!callCTA.classList.contains("open")) {
    let colors = assignValues();
    let div = document.createElement("TEXTAREA");
    div.rows = 5;
    div.classList.add("container-sm");
    div.id = "cta-container";
    colors.forEach((el) => {
      div.value += el + "\r\n";
    });
    prnt.append(div);
  }
}
function assignValues() {
  const id = ["id0", "id1", "id2", "id3"];
  const names = ["NavBar: ", "Heading: ", "Button: ", "Hero: "];
  const myColors = [];
  for (let i = 0; i < 4; i++) {
    let el = document.getElementById(id[i]).style.backgroundColor;
    myColors.push(names[i] + el);
  }
  return myColors;
}

export default getColors;
