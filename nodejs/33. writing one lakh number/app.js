import fs from "fs";
console.time();
// fs.appendFile("file.txt", "Pankaj Kumar", (error) => {
//   console.log(error);
// });

for (let i = 1; i <= 5000; i++) {
  fs.appendFile("file.txt", `${i}\n`, (error) => {
    if (error) console.log(error);
    if (i === 5000) {
      console.timeEnd();
    }
  });
}
