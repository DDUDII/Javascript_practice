'use strict';

function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'jonas';
calAge(1991);
