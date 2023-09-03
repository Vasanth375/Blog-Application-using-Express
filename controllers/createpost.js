const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const blogSchema = require("../schema/blog");

const multer = require("multer");

// SET STORAGE
var storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage }).single("myImage");

const createpost = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      const newImage = new blogSchema({
        blogName: req.body.title,
        description: req.body.content,
        createdAt: Date.now(),
        img: {
          data: req.file.filename,
          contentType: "image/*",
        },
      });

      newImage
        .save()
        .then(() => res.send("Successfully Uploaded"))
        .catch(() => console.log("Error"));
    }
  });
};

module.exports = { createpost, upload };
