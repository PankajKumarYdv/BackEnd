import fs from "fs/promises";

const bufferContent = await fs.readFile("file.txt");
console.log(bufferContent); // <Buffer 70 61 6e 6b 61 6a>
console.log(bufferContent.toString("utf8")); // pankaj
console.log(bufferContent.toString("base64")); // cGFua2Fq

const base64 = bufferContent.toString("base64");
fs.writeFile("newTextFile.txt", base64);
