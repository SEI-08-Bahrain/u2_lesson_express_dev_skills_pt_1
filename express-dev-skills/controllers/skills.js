// controllers/skills.js
const Skill = require('../models/skill')
const index = (req, res) => {
  const skills = Skill.getAll()
  const title = 'Skills'
  res.render('skills/index', {
    skills,
    title
  })
}

const show = (req, res) => {
  console.log(req.params.id)
  const skill = Skill.getOne(req.params.id)
  console.log(skill.skill)
  res.render('skills/show', {
    skill
  })
}

module.exports = {
  index,
  show
}
