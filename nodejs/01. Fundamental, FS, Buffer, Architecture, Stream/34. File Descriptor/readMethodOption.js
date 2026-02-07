import fs from "node:fs";

// open file
const fd = fs.openSync("file.txt");

//buffer
const dataBuffer = Buffer.alloc(10);

// reading data
fs.read(
  fd,
  {
    buffer: dataBuffer,
    // length: 5,
    // position: 2,
    offset: 2,
  },
  (error, byteSize, buffer) => {
    console.log(error);
    console.log(byteSize);
    console.log(buffer.toString());
    console.log(buffer);
  },
);
