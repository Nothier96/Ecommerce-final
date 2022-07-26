import express from "express";
const router = express.Router();
import mysql from "mysql";
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

router.get("/", (req, res) => {
  db.query("SELECT * FROM product", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});
router.get("/best", (req, res) => {
  db.query("SELECT * FROM product where price >" + 1500, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});
router.get("/:id", (req, res) => {
  let sql = "SELECT * FROM product where product_id=" + req.params.id;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});
export default router;
