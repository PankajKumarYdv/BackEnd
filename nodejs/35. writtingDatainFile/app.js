import fs from "node:fs";

// open file
const fd = fs.openSync("file.txt", "w");

// buffer
const dataBuffer = Buffer.from("Pankaj");

// writing data
fs.write(fd, dataBuffer, (error, byteSize, buffer) => {
  console.log(error);
  console.log(byteSize);
  console.log(buffer);
});
