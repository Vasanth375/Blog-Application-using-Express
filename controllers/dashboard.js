const blog = require("../schema/blog");

const dashboard = async (req, res) => {
  const blogs = await blog.find({ createdBy: req.session.username });
  blogs.reverse();

  const recentBlog = blogs[0];

  res.render("dashboard", {
    blog: recentBlog,
    isExist: recentBlog !== undefined,
  });
};

module.exports = dashboard;
