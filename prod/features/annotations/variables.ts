const apples: number =5;
let grape: number = 3;
grape = 7;
// apples = 10 ; this is error const type can't reassign

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, false]

//Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);

};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10,"y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

let numbers = [-10, -11, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++ ) {
  if (numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}