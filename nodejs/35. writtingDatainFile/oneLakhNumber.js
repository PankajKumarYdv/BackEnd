import fs from "node:fs";

console.time();

// open file as write
const fd = fs.openSync("oneLakhNumber.txt", "w");

// writing
for (let i = 1; i <= 5000; i++) {
  fs.writeSync(fd, `${i}, `);
}

fs.closeSync(fd);

console.timeEnd();
