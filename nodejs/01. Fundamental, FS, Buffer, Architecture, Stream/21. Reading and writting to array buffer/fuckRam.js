const buffer = new ArrayBuffer(1.99 * 1024 * 1024 * 1024);
const view1 = new DataView(buffer);
const view2 = new DataView(buffer);
const view3 = new DataView(buffer);

for (let i = 0; i < view1.byteLength; i++) {
  view1.setInt8(i, i + 1);
  view2.setInt8(i, i + 1);
  view3.setInt8(i, i + 1);
}

setInterval(() => {
  console.log("Running");
}, 2000);
