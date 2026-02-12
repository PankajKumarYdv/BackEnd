// import express
import express from "express";

// port
const port = 4000;
// instance
const app = express();

// listening
app.get("/", (req, res) => {
  res.send("Hello World");
});

// listening
app.listen(port, () => {
  console.log(`Listening on PORT : ${port}`);
});
