import fs from "fs";
const readStream = fs.createReadStream("chars.txt");
readStream.on("data", (chunks) => {
  console.log(chunks);
});
console.log(readStream.readableFlowing); // null :
console.log(readStream.readableEnded); // false : agr stream end ho jyega tb ye true hoga
console.log(readStream.isPaused()); // false : agr stream paused rhega tb ye true hoga

/*
// manually pausing the stream
readStream.pause();
console.log(readStream.isPaused()); // true;
*/

readStream.on("end", () => {
  console.log(readStream.readableFlowing);
  console.log(readStream.readableEnded);
  console.log(readStream.isPaused());
});
