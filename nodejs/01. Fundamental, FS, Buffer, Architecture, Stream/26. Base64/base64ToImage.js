import fs from "fs/promises";

// reading the file
const buffer = await fs.readFile("newTextFile.txt", "utf8");

// creating image
fs.writeFile("favicon.png", buffer, "base64");
