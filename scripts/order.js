import { getColors } from "./database.js"
import { getInteriors } from "./database.js"
import { getTechnologies } from "./database.js"
import { getWheels } from "./database.js"

const buildOrderListItem = (order) => {
  const colors = getColors();
  const foundColor = colors.find(
    (color) => {
      return color.id ===order.colorId
    }
  )
  const interiors = getInteriors ();
  const foundInterior = interiors.find(
    (interior) => {
      return interior.id === order.interiorId
    }
  )
  const technologies = getTechnologies ();
  const foundTechnology = technologies.find(
    (technology) => {
      return technology.id === order.technologyId
    }
  )
  const wheels = getWheels ();
  const foundWheel = wheels.find(
    (wheel) => {
      return wheel.id === order.wheelId
    }
  )
  const totalCost = foundColor.price + foundInterior.price + foundWheel.price + foundTechnology.price;

  const totalCost = foundMetal.price + foundSize.price + foundStyle.price;

  const costString = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
  })
  const d = new Date()
  return `<li>
        Order #${order.id} cost ${costString} date: ${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}
    </li>`
}

export const Orders = () => {
  /*
  Can you explain why the state variable has to be inside
  the component function for Orders, but not the others?
  */
  const orders = getOrders()
  
  let html = "<ul>"
  
  const listItems = orders.map(buildOrderListItem)
  
  html += listItems.join("")
  html += "</ul>"
  
  return html
}
