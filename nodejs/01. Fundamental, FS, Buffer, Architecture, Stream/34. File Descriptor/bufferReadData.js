import fs from "node:fs";

// opening file
const fd = fs.openSync("file.txt");

// Creating custom buffer
const readBuffer = Buffer.alloc(10); //  4 bytes buffer

// reading data
fs.read(fd, { buffer: readBuffer }, (error, byteSize, buffer) => {
  console.log(error);
  console.log(byteSize);
  console.log(buffer);
  console.log(buffer.toString());
});
