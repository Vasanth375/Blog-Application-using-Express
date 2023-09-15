const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogName: String,
  description: String,
  createdAt: { type: Date, default: Date.now() },
  createdBy: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("blogs", blogSchema);
