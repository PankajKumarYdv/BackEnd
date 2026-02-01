import fs from "fs";

console.time();
// Read Stream
const readStream = fs.createReadStream(`video.mp4`, {
  highWaterMark: 1 * 1024 * 1024,
});

// Write Steam
const writeStream = fs.createWriteStream("file.txt");

// reading file
readStream.on("data", (chunkBuffer) => {
  //   fs.appendFileSync("file.txt", chunkBuffer); // 114.6 ms
  writeStream.write(chunkBuffer); // 64.84ms
});

readStream.on("end", () => {
  console.timeEnd();
});
