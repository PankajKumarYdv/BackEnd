import fs from "node:fs";

const fd = fs.openSync("file.txt");

// read
fs.read(fd, (error, byteSize, buffer) => {
  console.log(error);
  console.log(byteSize);
  console.log(buffer);
  console.log(buffer.toString());
  console.log(buffer.byteLength);
});
