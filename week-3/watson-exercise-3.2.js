/*
===============================================
; Title: Exercise 3.2 - The Factory Pattern
; Author: Professor Krasso
; Date: 23 January 2021
; Modified By: Mark Watson
; Description: This shows how to use the Factory Pattern in a JavaScript program.
===============================================
*/

// imports header file for use
const header = require("../watson-header.js");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/


// start program


/**
 * Description: constructor function
 * Params: properties
 * CLASS
 */
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

/**
 * Description: constructor function
 * Params: properties
 * CLASS
 */
function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

/**
 * Description: constructor function
 * Params: properties
 * CLASS
 */
function Oracle(properties) {
  this.username = properties.username || "o-admin";
  this.password = properties.password || "o-s3cret";
  this.server = properties.server || "localhost:3000";
  this.version = properties.version || 21.1;
}

/**
 * Description: constructor function
 * Params: properties
 * CLASS
 */
function Informix(properties) {
  this.username = properties.username || "i-admin";
  this.password = properties.password || "i-s3cret";
  this.server = properties.server || "localhost:8080";
}

/**
 * Description: Main constructor function
 * Params: n/a
 * FACTORY PATTERN CONSTRUCTOR
 */
function DatabaseFactory() {}

// prototype for the type of class - set to MySql as default
DatabaseFactory.prototype.databaseClass = MySql;

/**
 * Description: Prototype factory function for creating an object
 * Params: properties
 * FACTORY PATTERN PROTOTYPE
 */
DatabaseFactory.prototype.createDatabase = function(properties) {
  // changes the class based on the determined type
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } else if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  } else {
    this.databaseClass = MySql;
  }

  // returns the new constructed object with the proper class
  return new this.databaseClass(properties);
};

//======================
// object declarations
//======================
const postgresFactory = new DatabaseFactory();
const postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

const mySqlFactory = new DatabaseFactory();
const mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

const oracleFactory = new DatabaseFactory();
const oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "mark",
  password: "cantGuessThis"
})

const informixFactory = new DatabaseFactory();
const informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "john",
  password: "tryToGuessThis"
})
//=================================

// header output
console.log(header.display("Mark", "Watson", "Exercise 3.2"));
console.log(""); //new line

// output
console.log(oracle);
console.log(""); //new line
console.log(informix);


// end program
