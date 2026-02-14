import express from "express";

const app = express();
const port = 2699;

// API
// global Middleware
app.use((req, res) => {
  res.send("Hey from global middleware");
});

app.get("/", (req, res, next) => {
  console.log("Middleware working");
  res.send("Hey, How are you ?");
});

// listening
app.listen(port, () => {
  console.log(`Listening on PORT : ${port}`);
});
