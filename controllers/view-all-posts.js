const blog = require("../schema/blog");

const view_all_post = async (req, res) => {
  console.log(req.session.username);

  const only_logged_user = req.session.username;

  const blogs = await blog.find({
    createdBy: only_logged_user,
  });
  console.log(blogs);
  const withImages = blogs.map((blog) => {
    const temp = "/uploads/" + blog.img.data;
    console.log(blog.img);
    // return { ...blog, img: temp };
  });
  // console.log(withImages);
  res.render("viewPosts", { blogs: blogs });
};

module.exports = view_all_post;
