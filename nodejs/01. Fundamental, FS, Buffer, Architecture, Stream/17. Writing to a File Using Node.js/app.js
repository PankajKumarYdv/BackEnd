import fs from "node:fs/promises";

// writing file
// fs.writeFile("file.txt", "How are you");
fs.appendFile("file.txt", "How are you ?");
