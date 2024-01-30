const express = require("express");
const router = express.Router();

const skillsCtrl = require("../controllers/skills.js");

router.get("/", skillsCtrl.index)
router.get("/new", skillsCtrl.new);
router.get("/:lang", skillsCtrl.show);

router.post("/", skillsCtrl.create);

module.exports = router;