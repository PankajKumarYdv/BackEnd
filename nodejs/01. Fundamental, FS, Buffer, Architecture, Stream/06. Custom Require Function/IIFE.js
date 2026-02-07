/*Syntax 
(function () {
  // Code to run immediately
})();

*/

(function () {
  let hidden = 42;
  console.log(hidden);
})();
// let result = hidden;

// Simple IIFE
(function () {
  let text = "Hello ! I called myself.";
  console.log(text);
})();

// IIFE with Parameters
(function (name) {
  let text = "Hello, " + name;
  console.log(text);
})("Pankaj");

// Arrow Function IIFE
(() => {
  console.log("This is Arrow Function.");
})();

// Arrow Function with Parameter
((name) => {
  console.log("Hello ," + name);
})("Pankaj kumar");

// IIFE as a Module (Private Variables)
const counter = (function () {
  let value = 0;
  return {
    increment() {
      value++;
    },
    get() {
      return value;
    },
  };
})();

counter.increment();
let x = counter.get();
console.log(x);
