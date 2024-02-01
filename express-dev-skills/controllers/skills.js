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

const deleteSkill = (req, res) => {
  skill.deleteOne(req.params.lang);
  res.redirect("/skills");
}

const edit = (req, res) => {
  const skills = skill.editOne(req.params.lang);
  res.render("edit", {skills});
}

const updateOne = (req, res) => {
  const skillLang = req.params.lang;
  const skillUpdate = req.body.framework;
  skill.updateOne(skillLang, skillUpdate);
  res.redirect("/skills/"+skillLang);
}

module.exports = {
  index,
  show,
  new: newSkill,
  create: createSkill,
  delete: deleteSkill,
  edit,
  updateOne
}