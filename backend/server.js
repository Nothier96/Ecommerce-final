import express from "express";
import products1 from "./data/products1.js";
import dotenv from "dotenv";
import mysql from "mysql";
const app = express();

const db = mysql.createConnection({
  host: "e-commerce.cmud03uwyloi.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "password",
  database: "ecommerce",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Database Connection Success");
});
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
app.get("/api/products", (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
