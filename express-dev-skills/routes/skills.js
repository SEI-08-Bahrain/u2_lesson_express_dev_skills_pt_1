const express = require("express");
const router = express.Router();

const skillsCtrl = require("../controllers/skills.js");

router.get("/", skillsCtrl.index)
router.get("/:lang", skillsCtrl.show);

module.exports = router;