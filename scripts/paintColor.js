import { getColors, setColor } from "./database.js";

const paintColors = getColors();

document.addEventListener(
  "change",
  (event) => {
  if (event.target.name === "paintColor") {
      setColor(parseInt(event.target.value))
  }
}
)

export const Colors = () => {
  let html = "<ul>";

  const listItems = paintColors.map(paintColor => {
    return `<li>
      <input type= "radio" name= "paintColor" value = "${paintColor.id}"/> ${paintColor.name}
      </li>`;
    }
  )

  html += listItems.join("");
  html += "</ul>";

  return html;
}