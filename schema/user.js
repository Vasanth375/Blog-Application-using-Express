const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const blogs = new mongoose.Schema({
    blogName: String,
    description: String
})

module.exports = mongoose.model("Users", userSchema)