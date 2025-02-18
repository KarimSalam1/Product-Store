import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import path from "path";
import exp from "constants";
import job from "./cron.js";

job.start();

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(port, () => {
  connectDB();
  console.log(`listening to port ${port}`);
});
