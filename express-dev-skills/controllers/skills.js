const skill = require("../models/skills")

const index = (req, res) => {
  const skills = skill.getAll()
  res.render("skills/index", {
    skills,
  })
}

const show = (req, res) => {
  const skills = skill.getOne(req.params.id)
  res.render("skills/show", {
    skills,
  })
}

module.exports = {
  index,show
}
