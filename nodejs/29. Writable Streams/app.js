import fs from "fs";

const writableStream = fs.createWriteStream("file.txt"); // create a newfile if not exist or not exist; same as write Method.

console.log(writableStream.writableHighWaterMark); // Default HighWaterMark 16384 (16KB)

// writing
writableStream.write("hi, "); // hi,
writableStream.write(`I am Pankaj Kumar.`); // I am Pankaj Kumar.
writableStream.write(`\nHow are you ?`);
/*
hi, I am Pankaj Kumar.
How are you ?

*/
