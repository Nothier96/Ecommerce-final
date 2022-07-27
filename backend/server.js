import {} from "dotenv/config";
import express from "express";
import path from "path";
import cors from ('cors');
const app = express();
import routes from "./routes/routes.js";

app.use(cors())
app.use("/api/products", routes);

const __dirname = path.resolve;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Api is running");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
