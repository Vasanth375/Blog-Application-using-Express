const express = require("express");
const router = express.Router();
const postview = require("../controllers/postview");
router.get("/", postview);
module.exports = router;
