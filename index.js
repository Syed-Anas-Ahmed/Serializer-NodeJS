require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.post("/twitter", (req, res) => {
  res.send("POST request to the homepage");
});
