import fs from "node:fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 }); // 4 bytes

console.log(writeStream.writableLength); // 0 {bz right now we haven't loaded any data to write};

//  writing some data
let isInternalBufferEmpty = writeStream.write("a"); // 1 byte data
console.log(writeStream.writableLength); // 1 (Means 1 byte data is loaded);
console.log(`What Intenale Buffer is saying : ${isInternalBufferEmpty}`);
isInternalBufferEmpty = writeStream.write("\nHello dude, I am pankaj kumar");

console.log(writeStream.writableLength); // 31 (Means 31 bytes data is loaded)
console.log(`What Intenale Buffer is saying : ${isInternalBufferEmpty}`);
