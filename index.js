import express from "express";
import mongoose from "mongoose";
import ShortUrlRoutes from "./routes/shortUrl.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/", ShortUrlRoutes);

app.listen(5000, () => {
  mongoose.connect("mongodb://localhost:27017/shortUrl");

  console.log("DB connected");
});
