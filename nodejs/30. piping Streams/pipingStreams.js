import fs from "node:fs";

console.time();
// reading stream
const readStream = fs.createReadStream("video.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

// write stream
let writeStream = fs.createWriteStream("new-video.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

// pipe method
readStream.pipe(writeStream);
console.log("piping started...");

// status
readStream.on("end", () => {
  console.timeEnd();
});

writeStream.on("close", () => {
  console.log("Closed");
});
