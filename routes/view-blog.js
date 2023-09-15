const express = require("express");
const router = express.Router();
const view_blog = require("../controllers/view-blog");

router.get("/", view_blog);

module.exports = router;
