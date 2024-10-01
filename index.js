// Code your solution here
// index.js

const drivers = ['Alice', 'Bob', 'Charlie', 'alice', 'BOB'];

function findMatching(driversArray, name) {
  return driversArray.filter(driver => 
    driver.toLowerCase() === name.toLowerCase()
  );
}

// Test cases
console.log(findMatching(drivers, 'Alice')); // 1) returns ['Alice', 'alice']
console.log(findMatching(drivers, 'BOB'));   // 2) returns ['Bob', 'BOB']
console.log(findMatching(drivers, 'David')); // 3) returns []

// index.js

const persons = ['Alice', 'Bob', 'Charlie', 'Alfred', 'Albert', 'Ariana'];

function fuzzyMatch(personsArray, letters) {
  return personsArray.filter(person => 
    person.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// Test cases
console.log(fuzzyMatch(persons, 'Al')); // 1) returns ['Alice', 'Alfred', 'Albert', 'Ariana']
console.log(fuzzyMatch(persons, 'B'));  // 2) returns ['Bob']
console.log(fuzzyMatch(persons, 'Ari')); // 3) returns ['Ariana']
console.log(fuzzyMatch(persons, 'C'));  // 4) returns ['Charlie']
console.log(fuzzyMatch(persons, 'x'));  // 5) returns []

const driver = [
    { name: 'Alice' },
    { name: 'Bob'},
    { name: 'Charlie' },
    { name: 'Alfred' },
    { name: 'Albert' },
    { name: 'Ariana' }
  ];
  // index.js

function matchName(driversArray, name) {
    return driversArray.filter(driver => 
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Test cases
  console.log(matchName(drivers, 'Alice'));  // 1) returns [{ name: 'Alice', car: 'Toyota' }]
  console.log(matchName(drivers, 'BOB'));    // returns [{ name: 'Bob', car: 'Honda' }]
  console.log(matchName(drivers, 'David'));  // returns []
  
  