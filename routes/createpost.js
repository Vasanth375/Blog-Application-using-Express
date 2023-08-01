const express = require("express");
const router = express.Router();

const createpost = require("../controllers/createpost");

// router.post("/", postSignup);
router.post("/", createpost);

module.exports = router;
