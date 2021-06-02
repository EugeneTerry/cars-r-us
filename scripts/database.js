const database = {
  carChoices: {},

  colors: [
    {id : 1, name: "Silver", price: 3.00},
    {id : 2, name: "Midnight Blue", price: 2.00},
    {id : 3, name: "Firebrick Red", price: 5.00},
    {id : 4, name: "Spring Green", price: 8.00}
  ],

  interiors: [
    {id : 1, name: "Beige Fabric", price: 13.00},
    {id : 2, name: "Charcoal Fabric", price: 12.00},
    {id : 3, name: "White Leather", price: 15.00},
    {id : 4, name: "Black Leather", price: 16.00}
  ],

  technologies: [
    {id : 1, name: "Basic Package (basic sound system)", price: 130.00},
    {id : 2, name: "Navigation Package (includes integrated navigation controls)", price: 140.00},
    {id : 3, name: "Visibility Package (includes side and reat cameras)", price: 150.00},
    {id : 4, name: "Ultra Package (includes navigation and visibility packages)", price: 160.00}
  ],

  wheels: [
    {id : 1, name: "17-inch Pair Radial", price: 200.00},
    {id : 2, name: "17-inch Pair Radial Black", price: 250.00},
    {id : 3, name: "18-inch Pair Spoke Silver", price: 300.00},
    {id : 4, name: "18-inch Pair Spoke Black", price: 350.00}
  ],

  purchases: [
    {
      id: 1,
      colorId: 2,
      interiorId: 3,
      technologyId: 4,
      wheelId: 5
    }
  ]
}
//export each customer option as an array

export const getColors = (id) => {
  return database.colors.map(color => ({...color}));
};

export const getInteriors = (id) => {
  return database.interiors.map(interior => ({...interior}));
};

export const getTechnologies = (id) => {
  return database.technologies.map(technology => ({...technology}));
};

export const getWheels = (id) => {
  return database.wheels.map(wheel => ({...wheel}));
};

//export data to be set in to temp arrays

export const setColors = (id) => {
  database.carChoices.colorId = id;
}

export const setInteriors = (id) => {
  database.carChoices.interiorId = id;
}

export const setTechnologies = (id) => {
  database.carChoices.technologyId = id;
}

export const setWheels = (id) => {
  database.carChoices.wheelId = id;
}

export const addPurchase = () => {
  const newPurchase = {...database.carChoices};
  const lastIndex = database.purchases.length - 1;
  newPurchase.id = database.purchases[lastIndex].id + 1;
  database.purchases.push(newPurchase);
  console.log(database.purchases);
  database.carChoices = {};
 
  document.dispatchEvent(new CustomEvent("stateChanged"))
}