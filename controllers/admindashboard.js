const blog = require("../schema/blog");
const user = require("../schema/user");

const admindashboard = async (req, res) => {
  const users = await user.find();
  const blogs = await blog.find();
  // console.log(users);
  // console.log(blogs);

  // adding a property of number of blogs written by a user
  users.forEach((user) => {
    let blogCount = 0;
    let currUser = user.name;
    blogs.forEach((blog) => {
      if (blog.createdBy === currUser) {
        blogCount += 1;
      }
      user.blogCount = blogCount;
    });
  });
  res.render("admindashboard", { users: users, blogs: blogs });
};

module.exports = admindashboard;
