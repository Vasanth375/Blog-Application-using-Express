const blog = require("../schema/blog");

const postview = async (req, res) => {
  const id = req.query.id;
//   console.log(id);
  const post = await blog.findById(id);
  res.render("postview", { blog: post });
};

module.exports = postview;
