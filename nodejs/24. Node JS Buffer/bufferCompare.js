// Buffer.compare(); // Compare two buffer object to check whether they are equal.
/*
    Return 
    -1 :  if the first buffer should come before the second buffer when sorted (meaning the first buffer is "lesser" in a byte-by-byte comparison). 
    0  : If the two buffer are identical 
    1  :  if the first buffer should come after the second buffer when sorted (meaning the first buffer is "greater" in a byte-by-byte comparison).
*/

// Checking two identical buffer

// Buffer 1
const buffer1 = Buffer.alloc(20);
const len1 = buffer1.write("Hello, Pankaj");
console.log(buffer1);
console.log(len1);
const string1 = buffer1.toString(); // Hello, Pankaj

// Buffer 2
const buffer2 = Buffer.alloc(20);
const len2 = buffer2.write("Hello, Pankaj");
console.log(buffer2);
console.log(len2);
const string2 = buffer2.toString(); // Hello, Pankaj

// comparison
const buf1 = Buffer.from(string1);
const buf2 = Buffer.from(string2);
const result = Buffer.compare(buf1, buf2);
console.log(result); // 0

// If first buffer come before second
const buf3 = Buffer.from("x");
const buf4 = Buffer.from("y");
const result2 = Buffer.compare(buf3, buf4);
console.log(result2); // -1

// If first buffer come after second
const buf5 = Buffer.from("y");
const buf6 = Buffer.from("x");
console.log(Buffer.compare(buf5, buf6));
