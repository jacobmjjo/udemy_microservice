const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['red', false, 0];

//error when input 
//pepsi[0] = 40;
//pepsi[2] = 'brown'

const carStats = {
  horsepower: 400,
  weight: 3354
}