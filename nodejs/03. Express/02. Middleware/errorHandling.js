import express from "express";

// instance
const app = express();
const port = 2699;

// Middle ware  with Error Handling
app.get(
  "/",
  (req, res, next) => {
    try {
      console.log("Running Middle ware 1");
      res.write("Hey from middleware 1");
      throw new Error("Error Occurred");
    } catch (error) {
      next(error);
    }
  },
  (error, req, res) => {
    console.log({ error: error.message });
    console.log("Running Error Middleware");
    res.end("Error Found in middleware 3");
  },
  (req, res, next) => {
    console.log("Running Middleware 3");
    res.end("Hii from Middleware 3");
  },
);

// listening
app.listen(port, () => {
  console.log(`Listening on port = ${port}`);
});
