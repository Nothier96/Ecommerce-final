const express = require("express");
const products1 = require("./data/products1");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/products", (req, res) => {
  res.json(products1);
});
app.get("/products/:id", (req, res) => {
  const product = products1.find((p) => p.id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
