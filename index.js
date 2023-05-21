import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ShortUrlRoutes from "./routes/shortUrl.js";

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/", ShortUrlRoutes);

app.listen(5000, () => {
  try {
    mongoose.connect(process.env.MONGO_URL);

    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
});
