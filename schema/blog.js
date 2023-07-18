const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  id: Number,
  blogName: String,
  description: String,
  createdAt: { type: Date, default: Date.now() },
  blogPic: Buffer
});

module.exports = mongoose.model("blogs", blogSchema);