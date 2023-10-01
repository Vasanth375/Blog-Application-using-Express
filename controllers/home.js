const blog = require("../schema/blog");

const home = async (req, res) => {
  const blogs = await blog.find();
  res.render("index", { blogs: blogs });
};

module.exports = home;
