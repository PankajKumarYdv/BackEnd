const nums = [5, 3, 6, 7, 9, 6];
/*
let count = 1;
let num = 0;
for (let i = nums.length - 1; i >= 0; i--) {
  num += nums[i] * count;
  count *= 10;
}
console.log(`Array to number  : ${num}`);
*/
// Reverse number ;
const len = nums.length;

let count = (len) => {
  let placeValue = 1;
  for (let i = 1; i < len; i++) {
    placeValue *= 10;
  }
  return placeValue;
};
let num = 0;
for (i = len - 1; i > 0; i--) {}
