function add(...nums){
    return nums.reduce((curr, acc) => curr + acc);
}

console.log(add(1,2,3,4,5,6,4,3,4,6,56,3))