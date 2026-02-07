import fs from "node:fs";

console.time();
const stream = fs.createWriteStream("stream.txt");
for (let i = 1; i <= 10000000; i++) {
  stream.write(`${i} \n`);
  if (i === 10000000) {
    stream.end();
  }
}

stream.on("finish", () => {
  console.timeEnd(); // 93.057ms
});
