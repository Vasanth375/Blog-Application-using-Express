const login = async (req, res) => {
  req.session.isAuth = false;
  res.render("login");
};

module.exports = login;
