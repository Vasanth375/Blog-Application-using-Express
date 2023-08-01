const express = require("express");
const router = express.Router();

const postsroute = require("../controllers/userpost");

// router.post("/", postSignup);
router.get("/", postsroute);

module.exports = router;
