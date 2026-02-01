import fs from "fs/promises";

// importing image
const buffer = await fs.readFile(".\\favicon\\favicon-16x16.png");
console.log(buffer);
const imageInBase64 = buffer.toString("base64");
console.log("Base64");
console.log(imageInBase64);

// writing that in file
fs.writeFile("newTextFile.txt", imageInBase64);
