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
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage }).single("myImage");

const createpost = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).send("Error uploading the image.");
    } else {
      const newImage = new blogSchema({
        blogName: req.body.title,
        description: req.body.content,
        createdAt: Date.now(),
        createdBy: req.session.username,
        img: {
          data: req.file.filename,
          contentType: "image/jpg/png",
        },
      });

      newImage
        .save()
        .then(() => {
          res.redirect("/dashboard/successUploaded");
          console.log("Blog Successfully Uploaded");
          // const a = true;
        })
        .catch(() => console.log("Error"));
    }
  });
};

module.exports = { createpost, upload };
