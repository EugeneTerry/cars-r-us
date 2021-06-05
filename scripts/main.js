import {CarsRUs} from './cars_r_us.js';

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
  mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()

document.addEventListener("stateChanged", () => {
  console.log("State of data has changed. Regenerating HTML...")
  renderAllHTML()
})