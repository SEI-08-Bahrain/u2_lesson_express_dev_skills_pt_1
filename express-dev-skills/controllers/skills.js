const skill = require("../models/skill");

const index = (req, res) => {
  const skills = skill.getAll();
  res.render("skillsIndex", {skills});
}

const show = (req, res) => {
  const skills = skill.getOne(req.params.lang);
  res.render("skills", {skills});
}

const newSkill = (req, res) => {
  res.render("new");
}

const createSkill = (req, res) => {
  console.log(req.body);
  skill.create(req.body);
  res.redirect("/skills");
}

module.exports = {
  index,
  show,
  new: newSkill,
  create: createSkill
}