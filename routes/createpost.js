const express = require("express");

const router = express.Router();

const { createpost, upload  } = require("../controllers/createpost");

// router.post("/", postSignup);
// router.get("/", getblogform);
router.post("/", createpost);

module.exports = router;
