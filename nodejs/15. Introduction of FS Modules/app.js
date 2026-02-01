// import fs from "node:fs";

/*
// fs method
const content = fs.readFileSync("./index.html", "utf-8");
// const content = contentBuffer.toString();
console.log(content);
*/
// const contentBuffer = fs.readFile("./index.html", (error, data) => {
//   console.log(data.toString());
// });
// console.log("End");

// import fs from "node:fs/promises";
/* 
This method carry `normal` methods, 
not syn methods. 
*/

//using fs/promises
import fs from "node:fs/promises";

console.time();
let i = 0;
const timerId = setInterval(() => {
  console.log(i++);
  if (i === 80) {
    clearInterval(timerId);
    console.timeEnd();
  }
}, 5);

const a = await fs.readFile("./index.html", "utf-8");
console.log("reading done");
console.log("End");
