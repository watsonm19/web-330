/*
===============================================
; Title: Exercise 1.3 - Class Refresher
; Author: Professor Krasso
; Date: 05 January 2020
; Modified By: Mark Watson
; Description: This program is intended to be a refresher on function classes
===============================================
*/

//imports watson-header.js for use
const header = require("../watson-header.js");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

/**
* Params: manufacturer, model, color, price
* Response: constructor
* Description: constructs object
*/
function Phone(man, mod, clr, prc) {
  this.manufacturer = man;
  this.model = mod;
  this.color = clr;
  this.price = prc;

  this.getPrice = () => {
    return '$' + this.price;
  }
  this.getModel = () => {
    return this.model;
  }
  this.getDetails = () => {
    return `Manufacturer: ${this.manufacturer}\nModel: ${this.getModel()}\nColor: ${this.color}\nPrice: ${this.getPrice()}`;
  }
}

// object - created using object constructor "Phone"
const cellPhone = new Phone('Apple', 'iPhone 12', 'Black', 799);

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 1.3'), '\n'); //new line
// output
console.log('-- DISPLAYING CELL PHONE DETAILS --')
console.log(cellPhone.getDetails());


// end program
