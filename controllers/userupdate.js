const blog = require("../schema/blog");
const path = require("path");
const multer = require("multer");

const display = async (req, res) => {
  try {
    const updateBlog = await blog.findById(req.query.id);
    res.render("userupdate", { blog: updateBlog });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

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

const updateDB = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Error:", err);
      return res.status(500).send("File upload failed.");
    }

    const blogid = req.query.id; // Use req.query.id to get the blog ID

    try {
      const updateddata = {
        createdAt: Date.now(),
      };

      if (req.body.blogName) {
        updateddata.blogName = req.body.blogName;
      }
      if (req.body.description) {
        updateddata.description = req.body.description;
      }
      if (req.file) {
        updateddata.img = {
          data: req.file.filename, // Use req.file.filename here
          contentType: "image/jpg/png",
        };
      }

      // Use findOneAndUpdate with a query condition
      const updatedblog = await blog.findOneAndUpdate(
        { _id: blogid },
        updateddata,
        {
          new: true,
        }
      );

      // console.log(updateddata);
      // res.send("Blog updated successfully.");
      res.redirect("/dashboard/post");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
};

module.exports = { display, updateDB };
