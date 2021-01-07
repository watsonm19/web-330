/*
===============================================
; Title: Exercise 1.4 - Duck Typing, A.K.A. "Interfaces"
; Author: Professor Krasso
; Date: 06 January 2020
; Modified By: Mark Watson
; Description: This program demonstrates how to create interfaces in a JavaScript program.
===============================================
*/

// imports watson-header.js for use
const header = require("../watson-header.js");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program


/**
* Params: model
* Response: constructor
* Description: Car class
*/
function Car(model) {
  this.model = model;
}

// an added method to the Car prototype
Car.prototype.start = () => {
  console.log('Car added to the racetrack!')
}

/**
* Params: model, year
* Response: constructor
* Description: Truck class
*/
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

// an added method to the Truck prototype
Truck.prototype.start = () => {
  console.log('Truck added to the racetrack!')
}

/**
* Params: model, year, color
* Response: constructor
* Description: Jeep class
*/
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

// an added method to the Jeep prototype
Jeep.prototype.start = () => {
  console.log('Jeep added to the racetrack!')
}

// array - for vehicles
let racetrack = [];

/**
* Params: vehicle
* Response: call prototype "start" method and add vehicle to racetrack array
* Description: Adds vehicle to the racetrack array and prints a confirmation message
*/
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

// objects - created using constructors
const corolla = new Car('Corolla');
const silverado = new Truck('Silverado', '2021');
const compass = new Jeep('Compass', '2020', 'White');

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 1.4'), '\n'); //new line

// output - from "start" prototype
driveIt(corolla);
driveIt(silverado);
driveIt(compass);
console.log(''); //new line

// output - from racetrack array - prints vehicle type (constructor name) and model
console.log('-- The following vehicles have been added to the racetrack --')
racetrack.forEach((vehicle) => {
  console.log(`${vehicle.constructor.name}: ${vehicle.model}`)
})


// end program
