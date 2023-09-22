const blog = require("../schema/blog");

const view_all_post = async (req, res) => {
  // console.log(req.session.username);

  const only_logged_user = req.session.username;

  const blogs = await blog.find({
    createdBy: only_logged_user,
  });
  res.set('Content-Type', 'text/html'); // Change 'image/jpeg' to the correct content type
  res.render("viewPosts", { blogs: blogs });
};

module.exports = view_all_post;
