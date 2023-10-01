const blog = require("../schema/blog");
const user = require("../schema/user");

const home = async (req, res) => {
  const blogs = await blog.find();
  res.render("index", { blogs: blogs });
};

module.exports = home;
