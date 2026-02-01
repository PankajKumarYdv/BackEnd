import fs from "fs";

console.time();

const readStream = fs.createReadStream(
  "D:\\Resources\\Youtube Course\\SQL Full Course for Beginners (30 Hours) – From Zero to Hero.mp4",
  // modifying Default chunk size
  {
    highWaterMark: 100 * 1024 * 1024, // 100 MB
  },
);
/*
File size : 6.84 GB 
*/

// Event listener
let x = 0;
readStream.on("data", (chunkBuffer) => {
  /*
  // default : read 64KB at a time
  console.log(chunkBuffer);
  console.log(chunkBuffer.byteLength);
  x++;
  */
  // writing the chuckBuffer in another file
  fs.appendFileSync("Chunk.mp4", chunkBuffer);
  if (chunkBuffer.byteLength < 100 * 1024 * 1024) {
    console.timeEnd();
  }
});

console.log(x);
