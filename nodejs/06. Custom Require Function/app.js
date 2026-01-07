function loadModule(path){
    const fs = require('fs'); // fs -> File read

    const fileContent = fs.readFileSync(path).toString();
    console.log(fileContent);
}



// using the above function 
const b = loadModule("./math.js");
console.log(b);