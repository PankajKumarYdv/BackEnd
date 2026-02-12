import express from "express";

const port = 2450;
const app = express();
app.disable("x-powered-by");

// HTTP Method
app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.route.path);
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Post request");
});

app.put("/", (req, res) => {
  res.send("Put request");
});

app.delete("/", (req, res) => {
  res.send("Delete request");
});

app.patch("/", (req, res) => {
  res.send("Patch request");
});

// Listening
app.listen(port, () => {
  console.log(`Listening on PORT : ${port}`);
});
