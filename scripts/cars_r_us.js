import {Colors} from './paintColor.js'
import {Interiors} from './interior.js'
import {Technologies} from './technology.js'
import {Wheels} from './wheels.js'
import {Orders} from './order.js'

//import {Orders} from './order.js'
//eventListener will go here later

document.addEventListener(
  "click",
  (event) => {
    if (event.target.id === "purchase") {
      addPurchase()
      FoodTruck()

    }
}
)

export const CarsRUs = () => {
  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class = "choices">
          <section class = "choices__color options">
            <h2>Colors</h2>
            ${Colors()}
          </section>
          <section class = "choices__interiors options">
            <h2>Interiors</h2>
            ${Interiors()}
          </section>
          <section class = "choices__technologyies options">
            <h2>Technologies</h2>
            ${Technologies()}
          </section>
          <section class = "choices__wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
          </section>
        </article>
        <article>
            <button id="purchaseButton">Purchase Combo</button>
        </article>
        <article class="customerOrders">
            <h2>New Orders</h2>
            ${Orders()}
        </article>
    `
}