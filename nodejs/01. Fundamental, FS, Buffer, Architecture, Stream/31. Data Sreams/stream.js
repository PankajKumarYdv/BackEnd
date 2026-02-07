process.stdin.on("data", (chunk) => {
  console.log("Data Received : ", chunk.toString());
});
