import express from "express";
import products1 from "./data/products1.js";
import dotenv from "dotenv";

const app = express();
import routes from "./routes/routes.js";

app.use("/api/products", routes);

app.get("/", (req, res) => {
  res.send("Api is running");
});
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
