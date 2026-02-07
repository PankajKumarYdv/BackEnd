const buffer = new ArrayBuffer(6); // 6 bytes
const view = new DataView(buffer);

view.setInt16(0, 12564); // 2 bytes
view.setInt16(2, 4656); // 2 bytes
view.setInt16(4, 6789); // 2 bytes
// view.setInt16(6, 32423); // Error : (2+2+2) = 6 bytes already used.
// console.log(buffer);
console.log(view);
console.log(view.getInt16(0)); // 12564
console.log(view.getInt16(2)); // 4656
console.log(view.getInt16(4));

/*
Buffer size =  6; 
Block size = 16 bytes 
NOTE : Each buffer occupy 8 bytes so, Total buffer Size : 6*8 = 48; 
But we are storing int16 value which occupy 16 bytes space. Means it 
is occupying 2 blocks. So element which we can set: 

6/(Block size / 8) = 3;  
adding more than 3 element will give error. 

*/
