function sum(...nums){
    return nums.reduce((curr, acc) => curr + acc);
}

console.log("Hey this is from outside of the function");

// Exporting the function 
module.exports = sum; 