import mongoose, { mongo } from "mongoose";
import * as shortid from "shortid";

const ShortUrlSchema = mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

const ShortUrl = new mongoose.model("short_urls", ShortUrlSchema);

export default ShortUrl;
