/*
buffer.from() method enables us to create a new buffer from any object, like Strings, buffer, arrays, and ArrayBuffer().

sntx : Buffer.from(object[,[offsetOrEncoding[,length]]])

Recommended, reliable way to convert various data types into a fixed-length sequence of bytes.

1. Object (Required ) : 
*/

// Create a buffer from a string
const mybuff = Buffer.from("Pankaj", "utf8");
console.log(mybuff); // <Buffer 50 61 6e 6b 61 6a>
console.log(mybuff.toString()); // Pankaj

// Create a buffer from a buffer
// Creating a buffer
const testBuffer = Buffer.from("Pankaj");
const newBuffer = Buffer.from(testBuffer);
console.log(newBuffer); // <Buffer 50 61 6e 6b 61 6a>

// Create a buffer from a array
const hexaArray = [0x62, 0x75, 0x66, 0x66, 0x65, 0x72];
const arrBuffer = Buffer.from(hexaArray);
console.log(arrBuffer); // <Buffer 62 75 66 66 65 72>

// Create a buffer from a arraybuffer
const arrayBuffer = new ArrayBuffer(10);
const view = new DataView(arrayBuffer);

view.setInt8(0, 12);
view.setInt8(1, 23);
view.setInt8(2, 98);
console.log(arrayBuffer); // <0c 17 62 00 00 00 00 00 00 00>
// specify offset and length
const buffer = Buffer.from(arrayBuffer, 0, 4);
console.log(buffer); // <Buffer 0c 17 62 00>

// Playing with Length
console.log(Buffer.from(arrayBuffer, 0, 6)); // <Buffer 0c 17 62 00 00 00>
console.log(Buffer.from(arrayBuffer, 0, 10)); // <Buffer 0c 17 62 00 00 00 00 00 00 00>
console.log(Buffer.from(arrayBuffer, 2, 6)); // <Buffer 62 00 00 00 00 00>
