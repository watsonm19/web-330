/*
===============================================
; Title: Exercise 2.2 - Prototypes
; Author: Professor Krasso
; Date: 12 January 2021
; Modified By: Mark Watson
; Description: This program shows how to build prototypes in JavaScript
===============================================
*/

// imports header file for use
var header = require("../watson-header.js");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program


// prototype object with one function (returns age)
const person = {
  getAge: function() {
    return `The person's age is ${this.age}.`
  }
}

// object containing data of a person - uses prototype
const djj = Object.create(person, {
  fullName: {
    value: 'Derrick Jones Jr.'
  },
  age: {
    value: 23
  }
})

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 2.2'), '\n'); //new line
// output
console.log(`The person's full name is ${djj.fullName}`);
console.log(djj.getAge());


// end program
