// Create buffer in node js
const buffer = Buffer.alloc(6); // (Passing the size of buffer in bytes {6 Bytes}).
console.log(buffer);
// Print : <Buffer 00 00 00 00 00 00>

// Buffer.write() : writes a string to the buffer
const writeBuffer = Buffer.alloc(100); // create a new buffer;
const lenOfInsertedString = writeBuffer.write("Hello world!"); // return length of the string, which is stored in the buffer
console.log(writeBuffer);
console.log(lenOfInsertedString);

// Buffer.byteLength() : Check the length of of a buffer object.
const bytelenBuffer = Buffer.alloc(6);
const bufferLen = Buffer.byteLength(bytelenBuffer);
console.log(bufferLen);

// Buffer.compare(); // Compare two buffer object to check whether they are equal.
/*
    Return 
    -1 :  if the first buffer should come before the second buffer when sorted (meaning the first buffer is "lesser" in a byte-by-byte comparison). 
    0  : If the two buffer are identical 
    1  :  if the first buffer should come after the second buffer when sorted (meaning the first buffer is "greater" in a byte-by-byte comparison).
*/
const compareBuffer = Buffer.alloc(12);
