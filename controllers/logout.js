
const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send("Error Occured");
    } else {
      res.redirect("/login");
    }
  });
};

module.exports = { logout };