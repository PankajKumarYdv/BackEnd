import fs from "fs";

const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: 4,
  encoding: "utf-8",
});

// setting encoding
// readStream.setEncoding("utf8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});
