import {getInteriors} from './database.js'

const interiors = getInteriors()

// add evetListener later

export const Interiors = () => {
  let html = '<ul>'

  for (const interior of interiors) {
    html += `<li>
    <input type = 'checkbox' name = 'interior' value = '${interiors.id}' /> ${interior.name} </li>`
  }
  html += '</ul>'
  return html;
}