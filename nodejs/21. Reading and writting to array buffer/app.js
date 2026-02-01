const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

// set int
view.setInt8(0, -120);
view.setInt8(1, 23);
view.setInt8(2, 0b1010);
view.setInt8(3, 0o1243);

// get int
console.log(view.getInt8(0));
console.log(view.getInt8(1));
console.log(view.getInt8(2));
console.log(view.getInt8(3));
