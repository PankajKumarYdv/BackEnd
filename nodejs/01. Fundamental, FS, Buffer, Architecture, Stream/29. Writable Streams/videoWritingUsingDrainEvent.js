import fs from "node:fs";

// readStream
let readStream = fs.createReadStream(
  "video.mp4",
  { highWaterMark: 1 * 1024 * 1024 }, // 1 mb
);

// writeStream
// let writeStream = fs.createWriteStream("video.mp4");
let writeStream = fs.createWriteStream("file.txt");

// reading file
readStream.on("data", (chunk) => {
  // writing data to 'file.txt'
  let writeData = writeStream.write(chunk); // write method will return the boolean value here

  //if internal buffer get full
  if (!writeData) {
    // if false pause the stream
    readStream.pause();
  }
});

writeStream.on("drain", () => {
  // after drain event , when the internal buffer becomes empty , resume the stream
  readStream.resume();
});

readStream.on("end", () => {
  console.log("End");
});
