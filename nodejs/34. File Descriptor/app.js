import fs from "node:fs";

const fd1 = fs.openSync("file.txt");
const fd2 = fs.openSync("file2.txt");
const fd3 = fs.openSync("file3.txt");

console.log({ fd1, fd2, fd3 });

setInterval(() => {
  console.log("hey panaj");
}, 200);
