import { getColors, setColors } from "./database.js";

const colors = getColors();

export const Colors = () => {
  let html = "<ul>";

  const listItems = colors.map(color => {
    return `<li>
      <input type= "radio" name= "color" value "${color.id}"/> ${color.name}
      </li>`;
    }
  )

  html += listItems.join("");
  html += "</ul>";

  return html;
}