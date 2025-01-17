'use strict';
const person = {
  firstName: 'Yuhan',
  lastName: 'Zhang',
  age: 31,
};
const fullName = person.firstName + ' ' + person.lastName;
console.log('The value of fullName is ', fullName);
person.livesInIrvine = false;
person.previousOccupation = 'SDE';
console.log('The value of person is ', person);
console.log('The type of person is ', typeof person);
const vehicle = {
  make: 'BMW',
  model: 'X5',
  year: 2022,
};
vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;
console.log('The value of vehicle is ', vehicle);
console.log('The type of vehicle is ', typeof vehicle);
const pet = {
  name: 'dengdeng',
  kind: 'orange',
};
delete pet.name;
delete pet.kind;
console.log('The value of pet is ', pet);
console.log('The type of pet is ', typeof pet);
