import fs from "fs/promises";
const buffer = new Int8Array(6);

// Storing "Pankaj" in memory as a unicode;
buffer[0] = 0x50; // "P"
buffer[1] = 0x61; // "a"
buffer[2] = 0x6e; // "n"
buffer[3] = 0x6b; // "k"
buffer[4] = 0x61; // "a"
buffer[5] = 0x6a; // "j"

console.log(`Memory Block : ${buffer}`);

// decoding unicode to string
const decoder = new TextDecoder("utf-8");
console.log(decoder.decode(buffer));

// Storing in the file
fs.writeFile("buffer-data.txt", buffer);
