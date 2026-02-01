/*
// importing variable
// import { num } from "./module.js";
import { num, sub, sum } from "./module.js";
console.log(num);

console.log(sum(56, 98));
console.log(sub(23, 34));   

//
*/

import { userData, cars, sum, sub } from "./module.js";

// Viewing object record
let viewRecord = 1;
for (let i = 0; i < viewRecord; i++) {
  console.log(userData[i].name);
  console.log(userData[i].phone);
  console.log(userData[i].email);
  console.log(userData[i].address);
  console.log(userData[i].postalZip);
  console.log(userData[i].region);
  console.log(userData[i].list);
  console.log(userData[i].text);
  console.log(userData[i].country);
  console.log(userData[i].numberrange);
  console.log(userData[i].currency);
  console.log(userData[i].alphanumeric);
}

// Viewing Array
console.log(cars[4]);

// calling arrow function
console.log(sum(230, 341));

// calling function
console.log(sub(233, 32));
