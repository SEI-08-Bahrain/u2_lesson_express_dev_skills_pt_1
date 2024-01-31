const skill = require("../models/skills")

const index = (req, res) => {
  const skills = skill.getAll()
  const title = "Dev Skills"
  res.render("skills/index", {
    skills,
    title,
  })
}

const show = (req, res) => {
  const skills = skill.getOne(req.params.id)
  res.render("skills/show", {
    skills,
  })
}

const newSkill = (req, res) => {
  res.render("skills/new")
}

const create = (req, res) => {
  console.log(req.body)
  skill.create(req.body)
  res.redirect(`/skills`)
}

const deleteSkill = (req, res) => {
  skill.deleteOne(req.params.id)
  res.redirect("/skills")
}



module.exports = {
  index,
  show,
  new: newSkill,
  create,
  deleteSkill,
}
