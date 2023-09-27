const express = require("express");
const router = express.Router();
const { display, updateDB } = require("../controllers/userupdate");

router.post("/", updateDB);
router.get("/", display);

module.exports = router;
