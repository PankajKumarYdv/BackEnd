import fs from "node:fs";

// instance
const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

// setting i position
let i = 1;

// writing 1000A function
function write1000A() {
  while (i <= 1000) {
    console.log(writeStream.writableLength);
    let isEmpty = writeStream.write("a");
    i++;
    if (!isEmpty) {
      break;
    }
    console.log(isEmpty);
  }

  // Calling function
  write1000A();
  /* If internal buffer gets full,
  it'll break and once its will be 
  empty "drain" event will be 
  call. 
   */

  //Adding event listener
  writeStream.on("drain", () => {
    // drain event : ye event tb hi chlega jb internal buffer khli ho jyega.
    write1000A();
  });
  /*  drain Event listener 
The 'drain' event is
emitted automatically once 
the internal buffer 
is empty again. By listening for
this event, you can implement flow
control and resume your
writing process efficiently
*/
}
