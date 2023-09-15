const express = require("express");
const router = express.Router();

const view_all_posts = require("../controllers/view-all-posts");

router.get("/", view_all_posts);

module.exports = router;
