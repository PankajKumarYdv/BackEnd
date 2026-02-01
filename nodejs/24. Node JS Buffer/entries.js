// Buffer.entries() method return a loop of indexes and bytes from the content of a buffer object. which is used to know the position and size of buffer contents.
const buffer = Buffer.alloc(10);
buffer.write("Hello,");
console.log(buffer);
const buf = Buffer.from(buffer.toString());
for ([index, byteValue] of buf.entries()) {
  console.log(`Index: ${index}, Byte Value: ${byteValue}`);
}
