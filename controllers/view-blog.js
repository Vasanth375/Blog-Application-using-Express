const blog = require("../schema/blog");

const view_blog = async (req, res) => {
  const Blog_id = req.query;
  const Oneblog = await blog.findById(Blog_id.id);
  // console.log(query.id);
  res.render("viewBlog", { blog: Oneblog });
};

module.exports = view_blog;
