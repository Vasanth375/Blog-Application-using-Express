const express = require("express");
const router = express.Router();

const signup = require("../controllers/signup");
const postSignup = require("../controllers/postSignup");

router.post("/", postSignup);
router.get("/", signup);

module.exports = router;
