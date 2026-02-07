// Creating buffer
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10);
const buf3 = Buffer.alloc(10);

// Writing string in buffer
buf1.write("Pankaj ");
buf2.write("Kumar ");
buf3.write("yadav");

// Creating array of that buffer
const arr = [buf1, buf2, buf3];
console.log(arr);

//concatenating buffers
const newBuffer = Buffer.concat(arr);

// Printing that buffer
console.log(newBuffer); // In hexadecimal formate
console.log(newBuffer.toString()); // Pankaj kumar yadav
console.log(newBuffer.toString("hex")); // 50616e6b616a200000004b756d6172200000000079616461760000000000
console.log(newBuffer.toString("base64")); // UGFua2FqIAAAAEt1bWFyIAAAAAB5YWRhdgAAAAAA
