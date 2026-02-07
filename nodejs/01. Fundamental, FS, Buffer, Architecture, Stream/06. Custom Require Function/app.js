// importing modules
const fs = require("fs"); // fs -> File read

// Function definition
function loadModule(path) {
  const fileContent = fs.readFileSync(path).toString();
  return fileContent;
}

// using the above function
const b = loadModule("./math.js");
console.log(b);
