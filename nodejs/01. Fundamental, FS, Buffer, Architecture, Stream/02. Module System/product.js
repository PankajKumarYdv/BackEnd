function product(...nums){
    return nums.reduce((curr, acc) => curr * acc);
}

function pwr(x,y){
    return x**y; 
}

module.exports = pwr; 
/*
Module.export exporting the value.
*/