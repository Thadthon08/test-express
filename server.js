const express = require("express");

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello Born To Dev! ");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.post("/contact", (req, res) => {
  res.send("Post request on contact page");
});

app.put("/services", (req, res) => {
  res.send("put request on services page");
});

app.delete("/help", (req, res) => {
  res.send("delete request on help page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
