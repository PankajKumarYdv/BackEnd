import fs from "node:fs/promises";

const fileContent = await fs.readFile("./data.txt", "utf-8");
console.log(fileContent);
