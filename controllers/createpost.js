const multer = require("multer");

const createpost = (req, res) => {
  // Set up storage for multer
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads"); // Define the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
      );
    },
  });

  // Create the multer middleware
  const upload = multer({ storage: storage });

  console.log(req.body.title);
  res.send("Data stored");
};

module.exports = createpost;
