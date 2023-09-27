const express = require("express");
const router = express.Router();

const postsroute = require("../controllers/userpost");
const { createpost, upload } = require("../controllers/createpost");
// const postSignup = require("../controllers/postSignup")
router.post("/", createpost);
router.get("/", postsroute);

module.exports = router;
