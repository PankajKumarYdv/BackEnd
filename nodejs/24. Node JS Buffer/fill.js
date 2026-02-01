// Buffer.fill() method enables to create a buffer, allocate a size and fill it with a special value.

const buffer = Buffer.alloc(10).fill("a");
console.log(buffer.toString());
