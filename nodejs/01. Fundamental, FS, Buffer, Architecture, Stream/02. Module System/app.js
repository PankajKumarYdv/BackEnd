// Importing the functions which we had exported. 
// we are importing the file not only function 


// module.exports (return value) -> require function ki
const sum = require('./add');
const pro = require('./product') 

/* Flow of require
1. code run from line 1; 
2. it reaches to line 6, it go to add.js file with require method. 
3. It run all the code from add.js file. 
4. `export.modules` return the required values. 
5. That exported value is returned to require which gets stored in sum, 
6. now code move to next line. 
*/

console.log(sum(1,2,3,4,5,6,4,3,4,6,56,3));
// console.log(pro(212*23));
console.log(pro(12,2)); 