const mongoose = require("mongoose");

function connection(mongoURI) {
  // Connect to MongoDB using Mongoose
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("MongoDB connected successfully!");
      // Your code here (e.g., starting your server or performing database operations)
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
      // Handle any connection errors
    });
}

module.exports = connection;
