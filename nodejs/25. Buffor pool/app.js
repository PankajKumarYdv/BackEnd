// Buffer pool
import { Buffer } from "buffer";

// Creating buffer
const a = Buffer.alloc(4);
const b = Buffer.allocUnsafe(4);

console.log(a.buffer);
console.log(b.buffer);

console.log("----------------");
console.log(a.byteLength); // 4
console.log(b.byteLength); // 4

console.log("----------------");
console.log(a.buffer.byteLength);
console.log(b.buffer.byteLength);
console.log(Buffer.poolSize); // 8192 (8192 / 1024 = 8KB)
