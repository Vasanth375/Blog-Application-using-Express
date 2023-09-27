const blog = require("../schema/blog");

const deletePost = async (req, res) => {
  const blogid = req.query.id;

  const k = await blog.findByIdAndDelete({ _id: blogid });
  console.log(k);
  res.redirect("/dashboard/post");
};

module.exports = deletePost;
