/*
===============================================
; Title: Exercise 3.3 - The Singleton Pattern
; Author: Professor Krasso
; Date: 23 January 2021
; Modified By: Mark Watson
; Description: This shows how to use the Singleton Pattern in a JavaScript program.
===============================================
*/

// imports header file for use
const header = require('../watson-header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program


/**
 * Description: singleton pattern
 * Params: n/a
*/
const DatabaseSingleton = (function() {
  // stores reference to singleton
  let instance;
  function createInstance() {
    // SINGLETON
    // private variable
    const postgresDatabase = new Object('Database instance initialized!');
    return postgresDatabase;
  }
  return {
    // public method
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
 })();

/**
 * Description: verifies if singleton is only one instance - logs result
 * Params: n/a
*/
function databaseSingletonTest(){
  // variables storing the instance
  const db1 = DatabaseSingleton.getInstance();
  const db2 = DatabaseSingleton.getInstance();

  // logs result with boolean value
  console.log('Same database instance? ' + (db1 === db2));
}

// header output
console.log(header.display('Mark', 'Watson', 'Exercise 3.3'), '\n');

// output - within function statement
databaseSingletonTest();


// end program
