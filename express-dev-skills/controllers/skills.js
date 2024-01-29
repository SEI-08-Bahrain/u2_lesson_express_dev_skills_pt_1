const skill = require("../models/skill");

const index = (req, res) => {
  const skills = skill.getAll();
  res.render("skillsIndex", skills);
}

const show = (req, res) => {
  const skills = skill.getOne(req.params.lang);
  res.render("skills", skills);
}

module.exports = {
  index,
  show
}