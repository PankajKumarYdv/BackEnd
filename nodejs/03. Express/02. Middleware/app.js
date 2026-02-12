import express from "express";

//
const app = express();
const port = 1300;

//
app.get(
  "/",
  (req, res, next) => {
    console.log("Running Middleware 1"); // server pr show hoga
    res.write("Hey Dude from 1"); // Client k pass show hoga
    next();
  },
  (req, res) => {
    console.log("Running Middleware 2");
    res.end("Hey from 2");
  },
);

// listening
app.listen(port, () => {
  console.log(`We are listening on ${port}`);
});
