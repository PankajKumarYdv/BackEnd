// Backpressure and Internal Buffer of Writable Streams
import fs from "node:fs";

// instance
let writeStreams = fs.createWriteStream("file.txt");

//
console.log(writeStreams.writableHighWaterMark); // 16384 (16KB)

// increasing HighWaterMark;
writeStreams = fs.createWriteStream("file.txt", {
  highWaterMark: 1 * 1024 * 1024,
});

//
console.log(writeStreams.writableHighWaterMark); // 1048576 Bytes (1 Bytes)
