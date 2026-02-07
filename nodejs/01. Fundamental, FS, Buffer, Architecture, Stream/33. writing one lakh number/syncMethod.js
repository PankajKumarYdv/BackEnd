import fs from "fs";

console.time();

for (let i = 1; i <= 5000; i++) {
  fs.appendFileSync("file.txt", `${i} \n`);
}

console.timeEnd();
