const blog = require("../schema/blog");
const user = require("../schema/user");

const profile_display = async (req, res) => {
  const username = req.session.username;
  const currUser = await user.find({ name: username });
  const email = currUser[0].email;

  //   console.log(username, currUser);
  //   console.log(email);

  const currUserBlogs = await blog.find({ createdBy: username });
  // console.log(currUserBlogs);
  console.log("In profile page");
  res.render("profile", {
    user: { username: username, email: email },
    userPosts: currUserBlogs,
    blogsWritten: currUserBlogs != [],
  });
};
module.exports = { profile_display };
